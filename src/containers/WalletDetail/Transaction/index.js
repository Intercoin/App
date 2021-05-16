
import React, { useEffect, useContext, useState, useMemo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useQuery, useInfiniteQuery, setQueryData, queryCache, queryCaches } from 'react-query';
import { AppContext } from 'contexts';
import clsx from 'clsx';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Hidden from '@material-ui/core/Hidden';
import InfiniteScroll from "react-infinite-scroller";

import { API_KEY, ITR_CONTRACT_ADDRESS } from 'constants/common';
import { ethScan } from 'services/ethScan';
import CardWrapper from 'hoc/CardWrapper';
import { useTableStyles } from 'styles/common-table';
import Table from 'components/UI/CustomTable/Table';
import HeaderRow from 'components/UI/CustomTable/HeaderRow';
import Row from 'components/UI/CustomTable/Row';
import Cell from 'components/UI/CustomTable/Cell';
import Paginator from 'components/UI/CustomTable/Paginator';
import { PAGES } from 'utils/links/pages';
import IntercoinLoading from 'components/IntercoinLoading';
import { isEmpty } from 'utils/utility';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // height: `calc(100vh - ${theme.spacing(35)}px) !important`,
        maxHeight: `calc(100vh - ${theme.spacing(35)}px) !important`,
        alignItems: 'center',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(10),
        overflowY: 'scroll'
    },
    arrowIconRotate: {
        transform: 'rotate(180deg)'
    }
}));

const headerData = ['Txn Hash', 'Age', 'From', 'To'];
const Transaction = ({ account }) => {
    const classes = useTableStyles();
    const classesMain = useStyles();
    document.body.style.overflow = 'hidden';
    const { setLoadingInfo } = useContext(AppContext);
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [offSet, setOffSet] = useState(5)
    const [scrollHeight, setScrollHeight] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const txParams = {
        module: 'account',
        action: 'txlist',
        address: account,
        page: currentPage,
        offset: offSet,
        sort: 'desc',
        apiKey: API_KEY
    }

    useEffect(() => {
        console.log('kevin currentPage', currentPage)
        if (currentPage !== 0) {
            try {

                // setQueryData(['transaction-info'] )

            } catch (error) {
                console.log('mars: MessageFetchMore Error', error);
            }
        }
    }, [currentPage]);

    const handleFetch = (params) => {
        console.log('kievn', params, tableData?.length)
        // setCurrentPage(prev => prev + 1);
        if (params._limit > tableData?.length && hasMore) {
            let url = "https://api.etherscan.io/api";
            if (params) {
                url = url + "?" + `module=account&action=txlist&address=${account}&=&=&page=${Math.floor(params._limit / 5)}&offset=5&sort=desc&apikey=${API_KEY}`;
            }
            axios.get(url)
                .then((res) => {
                    if (res?.data?.result.length < 5) {
                        setHasMore(false)
                    }
                    console.log('kevin', res)
                    setTableData(prevState => [
                        ...prevState, ...res?.data?.result
                    ])
                })
                .catch((error) => {
                    console.log('kevin: historyFetchMore Error', error);
                })
        }
    }

    const covertTimeStamp = (timeStamp) => {
        const curr = new Date().valueOf();
        var ms_Min = 60 * 1000; // milliseconds in Minute
        var ms_Hour = ms_Min * 60; // milliseconds in Hour
        var ms_Day = ms_Hour * 24; // milliseconds in day
        var ms_Mon = ms_Day * 30; // milliseconds in Month
        var ms_Yr = ms_Day * 365; // milliseconds in Year
        var diff = curr - timeStamp * 1000; //difference between dates.
        // If the diff is less then milliseconds in a minute
        if (diff < ms_Min) {
            return Math.round(diff / 1000) + ' seconds ago';
            // If the diff is less then milliseconds in a Hour
        } else if (diff < ms_Hour) {
            return Math.round(diff / ms_Min) + ' minutes ago';
            // If the diff is less then milliseconds in a day
        } else if (diff < ms_Day) {
            return Math.round(diff / ms_Hour) + ' hours ago';
            // If the diff is less then milliseconds in a Month
        } else if (diff < ms_Mon) {
            return + Math.round(diff / ms_Day) + ' days ago';
            // If the diff is less then milliseconds in a year
        } else if (diff < ms_Yr) {
            return + Math.round(diff / ms_Mon) + ' months ago';
        } else {
            return + Math.round(diff / ms_Yr) + ' years ago';
        }
    };

    return (
        <div className={clsx(classes.root, classesMain.root)} >
            <InfiniteScroll
                style={{ width: '100%' }}
                pageStart={currentPage}
                loadMore={() => hasMore ? handleFetch({ _limit: tableData.length + 5 }) : ""}
                hasMore={true || false}
                useWindow={false}
                loader={hasMore ?
                    <div key="loading" className="loader">
                        Loading ...
                    </div> : null
                }
            >
                {/* {loading && <IntercoinLoading wholeOverlay />} */}
                <Table>
                    <HeaderRow>
                        <th style={{ textAlign: 'center', fontSize: 24 }}>
                            •
                    </th>
                        {headerData.map((headerCol, index) => (
                            <th key={`header_${index}`}>
                                <Typography variant='caption'>{headerCol}</Typography>
                            </th>
                        ))}
                    </HeaderRow>

                    <tbody className={classes.tbodyClass}  >
                        {tableData && tableData.map((rowData, index) => {
                            return (
                                <Row key={`row_${index}`}>
                                    <Cell >
                                        <SyncAltIcon style={{ marginLeft: 8, marginTop: 4 }} />
                                    </Cell>
                                    <Cell >
                                        {rowData.hash?.slice(0, 6) + '...'}
                                    </Cell>
                                    <Cell>
                                        {covertTimeStamp(rowData.timeStamp)}
                                    </Cell>
                                    <Cell>
                                        {rowData.from?.slice(0, 6) + '...'}
                                    </Cell>
                                    <Cell>
                                        {rowData.to?.slice(0, 6) + '...'}
                                    </Cell>
                                </Row>
                            );
                        })}
                    </tbody>
                </Table>
            </InfiniteScroll>
        </div >
    );
};

export default Transaction;
