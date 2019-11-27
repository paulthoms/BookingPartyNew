import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';

import { login, userLogin, postAPI, registerUser } from '../../Normal/shared/APICaller';
import { useAppContext } from "../../contextApp/useContextApp";
import swal from 'sweetalert';
import { ChangeNav } from '../../Normal/shared/ChangeNav';

const jwt = require('jsonwebtoken');

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConFirmPassword] = useState();

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
    };

    // function handleLogin() {
    //     console.log(userName, password);

    //     var bodyFormData = new FormData();
    //     bodyFormData.set("Name", userName);
    //     bodyFormData.set("Password", password);

    //     userLogin("/login", bodyFormData, function (res) {
    //         if (res.status !== "error") {
    //             localStorage.clear();
    //             localStorage.setItem("token", res.data.token.token);
    //             localStorage.setItem("user-role", res.data.token.role);
    //             updateNavigationConfig(localStorage.getItem('user-role'));
    //             updateNavBar(ChangeNav(localStorage.getItem("user-role")));
    //             updateIsLogin(true);
    //             setOpen(false);
    //         }
    //         else {
    //             swal("Username or password is wrong");
    //         }
    //     })

    // }

    function handleRegister() {

        var formData = new FormData();
        formData.append('Email', email);
        formData.append('Name', name);
        formData.append('Phone', phone);
        formData.append('Password', confirmPassword);

        registerUser('/register', formData, function (res) {
            if (res.data.status == "error") {
                swal("something went wrong! Email or UserName existed");
            }
            else{
                swal("please check your email to confirm !!!");
            }
        })


    }

    function handleOnChangeName(e) {
        setName(e.target.value);
    }

    function handleOnPhone(e) {
        setPhone(e.target.value);
    }

    function handleOnEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeConfirmPassword(e) {
        setConFirmPassword(e.target.value);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Register
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Register</DialogTitle>
                <DialogContent>
                    <TextField
                        id="outlined-password-input"
                        label="Name"
                        type="text"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleOnChangeName}
                        value={name}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Phone"
                        type="text"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleOnPhone}
                        value={phone}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="text"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleOnEmail}
                        value={email}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChangePassword}
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChangeConfirmPassword}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleRegister} color="primary">
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}