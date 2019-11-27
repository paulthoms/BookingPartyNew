import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

import { login, userLogin, getAPI, postAPI, postAPIWithoutToken } from '../../Normal/shared/APICaller';
import { useAppContext } from "../../contextApp/useContextApp";
import swal from 'sweetalert';
import { ChangeNav } from '../../Normal/shared/ChangeNav';

const jwt = require('jsonwebtoken');

export default function FormDialog(props) {
    const [open, setOpen] = React.useState(props.open);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const {
        NavigationConfig,
        updateNavigationConfig,
        updateIsLogin,
        NavBar,
        updateNavBar
    } = useAppContext();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.setOpen(false);
    };

    function handleLogin() {
        console.log(userName, password);

        var bodyFormData = new FormData();
        bodyFormData.set("Name", userName);
        bodyFormData.set("Password", password);



        userLogin("/login", bodyFormData, function (res) {
            if (res.status !== "error") {
                localStorage.clear();
                localStorage.setItem("token", res.data.token.token);
                localStorage.setItem("user-role", res.data.token.role);
                updateNavigationConfig(localStorage.getItem('user-role'));
                updateNavBar(ChangeNav(localStorage.getItem("user-role")));
                updateIsLogin(true);
                setOpen(false);
            }
            else {
                swal("Username or password is wrong");
            }
        })

    }

    function handleChangeUserName(e) {
        setUserName(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleForgotPassword(e) {
        console.log(email);
        console.log("get pass on email!!!");
        var formData = new FormData();
        formData.append('email', email);
        postAPIWithoutToken('/pub/reset-password', formData, function (res) {
            console.log(res);
            if (res.data.status == "ok") {
                swal("please check your email to get new password!");
            }
            else {
                swal("something went wrong!!!");
            }
        });
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Login
            </Button> */}
            <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Forgot Password</DialogTitle>
                <Typography style={{ marginLeft: "10px" }} >Please put your email</Typography>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="name"
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeEmail}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleForgotPassword} color="primary">
                        Forgot password
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}