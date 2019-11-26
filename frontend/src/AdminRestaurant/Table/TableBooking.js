import React, { Component, useEffect } from 'react';
import Head from './Head';
import Row from './Row';
import Delete from './DeleteButtonBooking';
import ConfirmButton from './ConfirmButton';
import { useAdminResContext } from '../context/useAdminResContext';

function Table(props) {

    const {
        allBooking,
        loadingConfirm
    } = useAdminResContext();

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div className="makeStyles-cardBody-399">
            <div className="makeStyles-tableResponsive-3225">
                <table className="MuiTable-root makeStyles-table-3222">
                    <thead className="MuiTableHead-root makeStyles-primaryTableHeader-3216">
                        <Head cols={props.headTable} />
                    </thead>
                    <tbody className="MuiTableBody-root">
                        {

                            loadingConfirm ? <>Loading...</> :

                                allBooking.map((item) => {
                                    console.log(item);
                                    return (
                                        <tr className="MuiTableRow-root makeStyles-tableBodyRow-3227">
                                            <Row cols={[item.Time, item.Member, item.Name, item.Email, item.Phone]} type={props.type} />
                                            <ConfirmButton api={props.apiConfirm} id={item.ID} email={item.Email} status={item.Status} />
                                            <Delete api={props.apiDelete} id={item.ID} />
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
