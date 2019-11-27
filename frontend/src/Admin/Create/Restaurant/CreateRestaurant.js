import React, { useState } from 'react';
import Card from '../../../Normal/component/Card/Card';
import Form from '../../../Normal/component/Card/Form/Form';
import variables from '../../context/variables';
import Input from '../../../Normal/component/Card/Form/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { postAPI } from '../../../Normal/shared/APICaller';

import FileUpload from '../../../Normal/component/FileUpload';
import { useAdminContext } from '../../context/useAdminContext';
import MapPickPosition from '../../MapPickPosition';
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

function CreateDish() {
    const classes = useStyles();
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [type, setType] = useState();
    const [phone, setPhone] = useState();

    const {
        mapPicker
    } = useAdminContext();

    //post data to admin Context




    function handleOnChangeFile(e) {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }


    function handleOnSubmit(e) {
        try {
            console.log(mapPicker[0].pos.lat + ',' + mapPicker[0].pos.lng);

            const formData = new FormData();
            formData.append('Image', file);
            formData.append('Name', name);
            formData.append('Address', address);
            formData.append('Type', type);
            console.log(file);
            formData.append('Position', mapPicker[0].pos.lat + ',' + mapPicker[0].pos.lng);
            formData.append('Phone', phone);

            postAPI("/restaurant/new", formData, function (_res) {
                if (_res.data.status !== "error") {
                    swal("Success create Restaurant")
                }
                else {
                    swal("something when wrong");
                }
            });
        } catch (e) {
            swal("something when wrong");
        }



    }

    function handleOnChangeName(e) {
        setName(e.target.value);
    }

    function handleOnChangeType(e) {
        setType(e.target.value);
    }

    function handleOnChangeAddress(e) {
        setAddress(e.target.value);
    }

    function handleOnChangePhone(e) {
        setPhone(e.target.value);
    }



    return (
        <div key="Create Restaurant" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card name="Create Restaurant" describe="Create Dish">

                <div>
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
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Image"
                                className={classes.textField}
                                type="file"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeFile}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Type"
                                className={classes.textField}
                                type="text"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeType}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Address"
                                className={classes.textField}
                                type="text"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeAddress}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Phone"
                                className={classes.textField}
                                type="text"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangePhone}
                            />
                            <MapPickPosition />
                        </div>
                    </div>
                    <div onClick={handleOnSubmit} className="makeStyles-cardFooter-554">
                        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                            tabIndex={0} type="button">
                            <span className="MuiButton-label">Create Restaurant</span>
                            <span className="MuiTouchRipple-root" />
                        </button>
                    </div>
                </div>

            </Card>
        </div>
    );
}

export default CreateDish;