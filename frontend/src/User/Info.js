import React, { useState, useEffect } from 'react';
import Card from '../Normal/component/Card/Card';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { postAPI, putAPI } from '../Normal/shared/APICaller';
import swal from 'sweetalert';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
    },
}));

function Info(props) {
    const classes = useStyles();
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});

    const [name, setName] = useState(props.user.Name);
    const [phone, setPhone] = useState(props.user.Phone);
    const [email, setEmail] = useState(props.user.Email);
    const [password, setPassword] = useState();
    const [confirmPassword, setConFirmPassword] = useState();


    useEffect(() => {

        console.log(props);

    }, []);

    function handleOnChangeFile(e) {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }


    function handleOnSubmit(e) {

        const formData = new FormData();
        formData.append('Email', email);
        formData.append('Name', name);
        formData.append('Phone', phone);
        formData.append('Password', confirmPassword);
        console.log(file);

        if (password === confirmPassword && password !== undefined && password !== null) {
            putAPI("/user/" + props.user.ID, formData, function (_res) {
                if (_res.data.status !== "error") {
                    swal("change success!!!");
                }
                else {
                    swal("something went wrong!!!");
                }
            });
        }
        else {
            swal("something empty!!!!")
        }



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
        <div key="Create Dish" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <div className="makeStyles-cardBody-371">
                <div className="MuiGrid-root makeStyles-grid-252 MuiGrid-container">
                    <TextField
                        id="outlined-password-input"
                        label="Name"
                        className={classes.textField}
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
                        className={classes.textField}
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
                        className={classes.textField}
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
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChangePassword}
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Confirm Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChangeConfirmPassword}
                    />

                </div>
            </div>
            <div onClick={handleOnSubmit} className="makeStyles-cardFooter-554">
                <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                    tabIndex={0} type="button">
                    <span className="MuiButton-label">Change Info</span>
                    <span className="MuiTouchRipple-root" />
                </button>
            </div>
        </div>
    );
}

export default Info;