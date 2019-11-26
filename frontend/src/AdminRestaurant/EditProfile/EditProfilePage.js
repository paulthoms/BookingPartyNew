import React, { useEffect, useState } from 'react';
import Card from '../../Normal/component/Card/Card';
import Form from '../../Normal/component/Card/Form/Form';
import variables from '../context/variables';
import { useAdminResContext } from '../context/useAdminResContext';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { putAPI } from '../../Normal/shared/APICaller';
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


function EditProfilePage() {

    const classes = useStyles();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {
        restaurantSelf
    } = useAdminResContext();

    useEffect(() => {

    })

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeConfirmPassword(e) {
        setConfirmPassword(e.target.value);
    }

    function handleSubmitChangeProfile(e) {
        console.log(name);
        console.log(password);
        console.log(confirmPassword);



        if (name !== undefined && password === confirmPassword) {
            var formData = new FormData();
            formData.append('Name', name);
            formData.append('Password', password);
            putAPI("/restaurant-owners", formData, function (res) {
                if (res.status !== "error") {
                    swal("Success");
                }
                else {
                    swal("Something went wrong!");
                }
            });
        }

    }

    return (
        <div key="Edit Profile" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card name="Edit Profile" describe="Edit Profile">
                {
                    restaurantSelf.length > 0 ?
                        <>
                            <div>
                                <div className="makeStyles-cardBody-371">
                                    <div className="MuiGrid-root makeStyles-grid-252 MuiGrid-container">

                                        <TextField
                                            id="outlined-password-input"
                                            label="UserName"
                                            className={classes.textField}
                                            type="text"
                                            autoComplete="current-password"
                                            margin="normal"
                                            variant="outlined"
                                            onChange={handleChangeName}
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

                                <div onClick={handleSubmitChangeProfile} className="makeStyles-cardFooter-554">
                                    <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                                        tabIndex={0} type="button">
                                        <span className="MuiButton-label">Edit Profile</span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>

                            </div>

                        </> : "loading"
                }
            </Card>
        </div>
    );
}

export default EditProfilePage;