
import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from 'contexts';
import { withRouter } from 'react-router-dom';

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
import PollDialog from 'components/UI/PollDialog';
import AdminPollDialog from 'components/UI/AdminPollDialog';
import { poolData } from 'utils/helper/mockupData';
import { PAGES } from 'utils/links/pages';

const headerData = ['Voting Title', 'Count', 'Context', 'Action'];

const Pools = ({ history }) => {
  const classes = useTableStyles();
  const { setLoadingInfo } = useContext(AppContext);
  const [tableData, setTableData] = useState([]);
  const [pollData, setPollData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = useState({});
  const [isDialog, setIsDialog] = useState();
  const [isAdminDialog, setIsAdminDialog] = useState();

  const editHandler = _id => () => {
    history.push({
      pathname: `${PAGES.POLLS.url}/${_id}`
    })
  };

  const removeHandler = (_id) => () => {
  };

  const changeHandler = event => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
    event.stopPropagation();
  }


  const selectPollHandler = (rowData) => {
    setPollData(rowData)
    setIsDialog(true);
    // setIsAdminDialog(true)
  }

  const openCloseDialogHandler = show => () => {
    setIsDialog(show);
    setIsAdminDialog(show)
  }

  useEffect(() => {
    setTableData(poolData)
  }, [poolData])

  useEffect(() => {
    if (isAdminDialog) {
      document.body.style.overflow = 'hidden !important';
    }
    else {
      document.body.style.overflow = 'unset';
    }
  }, [isAdminDialog])

  return (
    <div className={classes.root}>
      <CardWrapper title={'Intercoin Polls'} buttonName={'CREATE NEW POLL'}>
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
                <Row onClick={() => selectPollHandler(rowData)} key={index}>
                  <Cell center>
                    <CheckBox checked={checked[index]} name={index} onClick={changeHandler} />
                  </Cell>
                  <Cell >
                    {rowData.title}
                  </Cell>
                  <Cell>
                    {rowData.votingCount}
                  </Cell>
                  <Cell>
                    {rowData.context}
                  </Cell>
                  <Cell className={classes.actionColumn} center>
                    <div className={classes.actionContainer}>
                      <EditButton onClick={editHandler(index)} />
                      <DeleteButton onClick={removeHandler(rowData._id)} />
                    </div>
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
        {
          isDialog &&
          <PollDialog
            pollData={pollData}
            headerTitle={'Please enter your question!'}
            open={true}
            onClose={openCloseDialogHandler(false)}
          />
        }
        {
          isAdminDialog &&
          <AdminPollDialog
            pollData={pollData}
            headerTitle={'Please enter your question!'}
            open={true}
            onClose={openCloseDialogHandler(false)}
          />
        }
      </CardWrapper>
    </div>
  );
};

export default withRouter(Pools);
