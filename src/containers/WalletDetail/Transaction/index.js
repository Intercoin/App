
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useQuery } from 'react-query';
import { AppContext } from 'contexts';
import clsx from 'clsx';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: `calc(100vh - ${theme.spacing(44)}px)`,
        alignItems: 'center',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(10)
    },
    arrowIconRotate: {
        transform: 'rotate(180deg)'
    }
}));

const headerData = ['Txn Hash', 'Age', 'From', 'To'];
const Transaction = ({ account }) => {
    const classes = useTableStyles();
    const classesMain = useStyles();

    const { setLoadingInfo } = useContext(AppContext);
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const txParams = {
        module: 'account',
        action: 'txlist',
        address: account,
        page: 1,
        offset: 10,
        sort: 'asc',
        apiKey: API_KEY
    }

    const { data: txList, isLoading: loading } = useQuery(['transaction-info'],
        () => ethScan(txParams));

    useEffect(() => {
        setTableData(txList?.data.result)
    }, [txList])

    return (
        <div className={clsx(classes.root, classesMain.root)}>
            {loading && <IntercoinLoading wholeOverlay />}
            <Table>
                <HeaderRow>
                    <th style={{ textAlign: 'center', fontSize: 24 }}>
                        •
                    </th>
                    {headerData.map((headerCol, index) => (
                        <th key={index}>
                            <Typography variant='caption'>{headerCol}</Typography>
                        </th>
                    ))}
                </HeaderRow>
                <tbody className={classes.tbodyClass}>
                    {tableData && tableData.map((rowData, index) => {
                        return (
                            <Row key={index}>
                                <Cell >
                                    {console.log(account, rowData.from, account === rowData.from)}
                                    <SyncAltIcon style={{ marginLeft: 8, marginTop: 4 }} />
                                </Cell>
                                <Cell >
                                    {rowData.blockHash?.slice(0, 6) + '...'}
                                </Cell>
                                <Cell>
                                    {rowData.timeStamp}
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
            <div className={classes.paginator}>
                <Paginator
                    totalPages={Math.ceil(tableData?.length / 10)}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
};

export default Transaction;
