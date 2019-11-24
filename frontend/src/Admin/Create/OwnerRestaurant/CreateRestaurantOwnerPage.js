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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useAppContext } from '../../../contextApp/useContextApp';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
    },
}));

function CreateDish() {
    const classes = useStyles();
    const [file, setFile] = useState('');

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [resID, setResID] = useState();

    const {

        allRestaurant

    } = useAppContext();

    function handleOnSubmit(e) {

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Password', password);
        formData.append('ID', resID);
        console.log(file);

        postAPI("/restaurant-owners/new", formData, function (_res) {
            console.log(_res);
        });



    }

    function handleOnChangeName(e) {
        setName(e.target.value);
    }

    function handleOnPassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeSelect(e) {
        console.log(e.target.value);
        setResID(e.target.value);
    }



    return (
        <div key="Create Restaurant" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card name="Create Restaurant" describe="Create Dish">

                <div>
                    <div className="makeStyles-cardBody-371">
                        <div className="MuiGrid-root makeStyles-grid-252 MuiGrid-container">
                            <TextField
                                id="outlined-password-input"
                                label="Restaurant UserName"
                                className={classes.textField}
                                type="text"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeName}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnPassword}
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Restaurant</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChangeSelect}
                                >
                                    {
                                        allRestaurant.map((item, index) => {
                                            return <MenuItem value={item.ID}>{item.Name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
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