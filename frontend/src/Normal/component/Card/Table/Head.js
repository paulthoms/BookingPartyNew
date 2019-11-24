import React, {useEffect, useState} from 'react';

function Head(props) {
    const [cols,setCols] = useState([]);

    useEffect(()=>{
        var tmp =[];
        props.cols.map((item,index) => {
            tmp.push(<th key = {index} className="MuiTableCell-root makeStyles-tableCell-3224 makeStyles-tableHeadCell-3223 MuiTableCell-head" scope="col">{item}</th>)
        });
        setCols(tmp);
    },[]);

    
    return (
        <tr className="MuiTableRow-root makeStyles-tableHeadRow-3226 MuiTableRow-head">
            {cols}
            <th key = "action" className="MuiTableCell-root makeStyles-tableCell-3224 makeStyles-tableHeadCell-3223 MuiTableCell-head" scope="col">Action</th>
        </tr>
    );
}

export default Head;
