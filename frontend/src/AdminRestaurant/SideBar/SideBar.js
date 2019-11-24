import React, { Component, useState } from 'react';
import Item from './Item';
import { useAdminResContext } from '../context/useAdminResContext';


function SideBar(props) {

    const {
        NavigationConfig,
        updateTitleContent,
        titleContent
    } = useAdminResContext();

    const [show, setShow] = useState(false);

    function handleOnClickItem(title) {
        updateTitleContent(title);
    }

    function handleClickMenu() {
        setShow(!show);
    }

    return (
        <div id="sidebar">
            <div className="makeStyles-logo-8">
                <a href="/" className="makeStyles-logoLink-9">
                    Booking Party
                </a>
                <div onClick={handleClickMenu} style={{ color: "white" }} ><i class="fas fa-bars"></i></div>
            </div>
            <div className={`makeStyles-sidebarWrapper-27 ${show && "show__sideBar"}`}>
                <ul className="MuiList-root makeStyles-list-14 MuiList-padding">
                    {
                        NavigationConfig.map((item, index) => {
                            if (item.display !== 'none') {
                                return (
                                    <div key={index} onClick={() => handleOnClickItem(item.title)} className={`makeStyles-item-15 ${item.title === titleContent && "makeStyles-orange-25"} `} ><Item title={item.title} /></div>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
