import {useAdminResContext} from '../context/useAdminResContext';
import React from 'react';

function Item (props){
    const {
        titleContent
    } = useAdminResContext();

    return (
        <div className={"MuiButtonBase-root MuiListItem-root makeStyles-itemLink-16 MuiListItem-gutters MuiListItem-button "}
            tabIndex={0} role="button" aria-disabled="false">
            <svg className= {"MuiSvgIcon-root makeStyles-itemIcon-17 " + (props.title === titleContent && "makeStyles-whiteFont-21")  } focusable="false"
            viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </svg>
            <div className= {"MuiListItemText-root makeStyles-itemText-19 " + (props.title === titleContent && "makeStyles-whiteFont-21")  }>{props.title}</div>
            <span className="MuiTouchRipple-root" />
        </div>
    );
}

export default Item;
