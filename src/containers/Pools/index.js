
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';

import CardWrapper from 'hoc/CardWrapper';
import { useTableStyles } from 'styles/common-table';
import Table from 'components/UI/CustomTable/Table';
import HeaderRow from 'components/UI/CustomTable/HeaderRow';
import Typography from '@material-ui/core/Typography';
import Row from 'components/UI/CustomTable/Row';
import Cell from 'components/UI/CustomTable/Cell';
import Paginator from 'components/UI/CustomTable/Paginator';
import EditButton from 'components/UI/Buttons/EditButton';
import DeleteButton from 'components/UI/Buttons/DeleteButton';
import CheckBox from 'components/UI/CheckBox';
import { poolData } from 'utils/helper/mockupData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: `100%`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionColumn: {
    width: theme.spacing(11),
  },
}));

const headerData = ['Title', 'Voting Count', 'Context', 'Action'];
const Pools = () => {
  const classes = useTableStyles();
  const { setLoadingInfo, account } = useContext(AppContext);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  const editHandler = _id => () => {
  };

  const removeHandler = (_id) => () => {
  };

  const changeHandler = name => event => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });

  }
  useEffect(() => {
    setTableData(poolData)
  }, [poolData])

  return (
    <div className={classes.root}>
      <CardWrapper title={'InterCoin Pools'} buttonName={'CREATE NEW POOL'}>
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
                  <Cell className={classes.checkBoxColumn} center>
                    <CheckBox checked={checked[index]} name={index} onChange={changeHandler} />
                  </Cell>
                  <Cell>
                    {rowData.title}
                  </Cell>
                  <Cell>
                    {rowData.votingCount}
                  </Cell>
                  <Cell>
                    {rowData.context}
                  </Cell>
                  <Cell className={classes.actionColumn} center>
                    <EditButton onClick={editHandler(rowData._id)} />
                    <DeleteButton onClick={removeHandler(rowData._id)} />
                  </Cell>
                </Row>
              );
            })}
          </tbody>
        </Table>
        <div className={classes.paginator}>
          <Paginator
            totalPages={Math.ceil(poolData.length / 10)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} />
        </div>
      </CardWrapper>
    </div>
  );
};

export default Pools;
