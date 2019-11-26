import React, { Component, useEffect } from 'react';
import Head from './Head';
import Row from './Row';
import Delete from './DeleteButton';

function Table(props) {

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
                            props.allRestaurant.length>0?
                            props.allRestaurant.map((item) => {
                                return (
                                    <tr className="MuiTableRow-root makeStyles-tableBodyRow-3227">
                                        <Row cols={[item.Name, item.Address]} type={props.type} />
                                        <Delete api={props.api + item.ID} />
                                    </tr>
                                )
                            })
                            :<>Loading...</>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
