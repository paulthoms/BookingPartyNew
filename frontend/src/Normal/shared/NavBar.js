import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import { useAppContext } from "../../contextApp/useContextApp";
import Login from '../../User/LoginUser/Login';
import Register from '../../User/Register/Register';
import { ChangeNav } from './ChangeNav';

export default function NavBar() {

    const {
        NavBar,
        updateNavBar
    } = useAppContext();

    useEffect(() => {
        updateNavBar(ChangeNav(localStorage.getItem("user-role")));
    }, [])

    function handleOnclickLogout() {
        localStorage.clear();
        updateNavBar(ChangeNav(localStorage.getItem("user-role")));
    }

    return (
        <>
            <div className="navbar" >
                <div className="navbar__logo" >
                    {/* logo */}
                </div>
                <div className="narbar__navigation-group" >
                    {

                        NavBar.map((item, index) => {
                            if (item.id === "login") {
                                return (
                                    <Button>
                                        <Login />
                                    </Button>
                                );
                            }
                            if (item.id === 'register') {
                                return (
                                    <Button>
                                        <Register />
                                    </Button>
                                )
                            }
                            if (item.id === 'logout') {
                                return (
                                    <Button onClick={handleOnclickLogout} >
                                        Logout
                                    </Button>
                                );
                            }
                            return (
                                <Link to={item.url} >
                                    <div key={index} className="navbar__navigation-link" >
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        })

                    }
                </div>
            </div>
            <Filter />
        </>
    )
}
