import React, {useEffect, useState} from 'react';

function Row (props){
    const [cols,setCols] = useState([]);
    useEffect(()=>{
        var tmp =[];
        props.cols.map((item,index) => {
            tmp.push(<td key = {index} className="MuiTableCell-root makeStyles-tableCell-3224 MuiTableCell-body">{item}</td>)
        })
        setCols(tmp);
    },[]);

    function renderAction() {
        switch(props.type) {
            case 'comfirm':
                return (
                    <div>
                        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                        tabIndex={0} type="button">
                            <span className="MuiButton-label">Comfirm</span>
                        </button>
                        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                        tabIndex={0} type="button">
                            <span className="MuiButton-label">Refuse</span>
                        </button>
                    </div>
                );
            case 'edit':
                return (
                    <div>
                        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                        tabIndex={0} type="button">
                            <span className="MuiButton-label">Edit</span>
                        </button>
                        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                        tabIndex={0} type="button">
                            <span className="MuiButton-label">Delete</span>
                        </button>
                    </div>
                );
            default:
                return (
                    <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                    tabIndex={0} type="button">
                        <span className="MuiButton-label">Delete</span>
                    </button>
                );
        }
    };
    return (
        <tr className="MuiTableRow-root makeStyles-tableBodyRow-3227">
            {cols}
            <td key = 'action' className="MuiTableCell-root makeStyles-tableCell-3224 MuiTableCell-body">
                {
                    renderAction()
                }
            </td>
        </tr>
    );
}

export default Row;
