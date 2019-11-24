import React, { useState } from 'react';
import Card from '../../Normal/component/Card/Card';
import Form from '../../Normal/component/Card/Form/Form';
import variables from '../context/variables';
import Input from '../../Normal/component/Card/Form/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { postAPI } from '../../Normal/shared/APICaller';

import FileUpload from '../../Normal/component/FileUpload';

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
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState();

    function handleOnChangeFile(e) {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }


    function handleOnSubmit(e) {

        const formData = new FormData();
        formData.append('Image', file);
        formData.append('Name', name);
        formData.append('Description', description);
        formData.append('Cost', cost);
        console.log(file);

        postAPI("dish", formData, function (_res) {
            console.log(_res);
        });



    }

    function handleOnChangeName(e) {
        setName(e.target.value);
    }

    function handleOnChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleOnChangeCost(e) {
        setCost(e.target.value);
    }



    return (
        <div key="Create Dish" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card name="Create Dish" describe="Create Dish">

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
                                label="Description"
                                className={classes.textField}
                                type="text"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeDescription}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Cost"
                                className={classes.textField}
                                type="text"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeCost}
                            />
                        </div>
                    </div>
                    <div onClick={handleOnSubmit} className="makeStyles-cardFooter-554">
                        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                            tabIndex={0} type="button">
                            <span className="MuiButton-label">Create Dish</span>
                            <span className="MuiTouchRipple-root" />
                        </button>
                    </div>
                </div>

            </Card>
        </div>
    );
}

export default CreateDish;