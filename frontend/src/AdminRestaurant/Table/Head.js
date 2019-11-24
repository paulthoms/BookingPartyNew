import React, { useEffect, useState } from 'react';

function Head(props) {

    useEffect(() => {

    }, []);


    return (
        <tr className="MuiTableRow-root makeStyles-tableHeadRow-3226 MuiTableRow-head">
            {
                props.cols.map((item, index) => {
                    return <th key={index} className="MuiTableCell-root makeStyles-tableCell-3224 makeStyles-tableHeadCell-3223 MuiTableCell-head" scope="col">{item}</th>
                })
            }
            <th key="action" className="MuiTableCell-root makeStyles-tableCell-3224 makeStyles-tableHeadCell-3223 MuiTableCell-head" scope="col">Action</th>
        </tr>
    );
}

export default Head;
