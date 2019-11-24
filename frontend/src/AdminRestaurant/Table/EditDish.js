import React, { useState, useEffect } from 'react';
import { useAdminResContext } from '../context/useAdminResContext';
import Card from '../../Normal/component/Card/Card';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { postAPI, putAPI } from '../../Normal/shared/APICaller';


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


export default function EditDish() {
    const classes = useStyles();
    const {
        dataEditDish
    } = useAdminResContext();


    const [file, setFile] = useState('');
    const [filename, setFilename] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [cost, setCost] = useState();

    function handleOnChangeFile(e) {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }


    function handleOnSubmit(e) {

        const formData = new FormData();
        formData.append('Image', file);
        formData.append('Name', name === undefined ? dataEditDish[0].Name : name);
        formData.append('Description',description === undefined ? dataEditDish[0].Description : description);
        formData.append('Cost', cost === undefined ? dataEditDish[0].Cost : cost);
        console.log(file);

        putAPI("/dish/" + dataEditDish[0].ID, formData, function (_res) {
            console.log(_res);
        });

        // console.log();

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
        <div key="Edit Dish" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card name="Edit Dish">

                {
                    dataEditDish.length !== 0 &&
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
                                    value={name === undefined ? dataEditDish[0].Name : name}
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
                                    value={description === undefined ? dataEditDish[0].Description : description}
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
                                    value={cost === undefined ? dataEditDish[0].Cost : cost}
                                    onChange={handleOnChangeCost}
                                />
                            </div>
                        </div>
                        <div onClick={handleOnSubmit} className="makeStyles-cardFooter-554">
                            <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                                tabIndex={0} type="button">
                                <span className="MuiButton-label">Update Dish</span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                        </div>
                    </div>
                }



            </Card>
        </div>
    )
}
