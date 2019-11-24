import React, { useEffect, useState } from 'react';
import Card from '../../Normal/component/Card/Card';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getAPI, putAPI } from '../../Normal/shared/APICaller';
import { useAdminResContext } from '../context/useAdminResContext';
import MapPickPosition from '../MapPickPosition';

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

export default function EditRestaurantPage() {
    const classes = useStyles();

    const {
        restaurantSelf,
        mapPicker
    } = useAdminResContext();

    const [name, setName] = useState();
    const [type, setType] = useState();
    const [address, setAddress] = useState();
    const [image, setImage] = useState('');


    useEffect(() => {

    })

    function handleSubmitChangeRestaurantInfo() {

        console.log(mapPicker[0].pos.lat + "," + mapPicker[0].pos.lng);

        const formData = new FormData();
        formData.append('Image', image === undefined ? restaurantSelf[0].Image : image);
        formData.append('Type', type === undefined ? restaurantSelf[0].Type : type);
        formData.append('Name', name === undefined ? restaurantSelf[0].Name : name);
        formData.append('Address', address === undefined ? restaurantSelf[0].Address : address);
        formData.append('Position', mapPicker.length === 0 ? "21.040432,105.782250" : mapPicker[0].pos.lat + "," + mapPicker[0].pos.lng);

        putAPI('/restaurant', formData, function (res) {
            console.log(res);
        });

    }

    function handleChangeName(e) {
        console.log(name);
        setName(e.target.value);
    }

    function handleChangeType(e) {
        setType(e.target.value);
    }

    function handleChangeAddress(e) {
        setAddress(e.target.value)
    }

    function handleChangeImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }


    return (
        <div key="Edit Restaurant" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card name="Edit Restaurant">

                {
                    restaurantSelf.length !== 0 &&
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
                                    value={name === undefined ? restaurantSelf[0].Name : name}
                                    onChange={handleChangeName}
                                />

                                <TextField
                                    id="outlined-password-input"
                                    label="Type"
                                    className={classes.textField}
                                    type="text"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    value={type === undefined ? restaurantSelf[0].Type : type}
                                    onChange={handleChangeType}
                                />

                                <TextField
                                    id="outlined-password-input"
                                    label="Address"
                                    className={classes.textField}
                                    type="text"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    value={address === undefined ? restaurantSelf[0].Address : address}
                                    onChange={handleChangeAddress}
                                />

                                <TextField
                                    id="outlined-password-input"
                                    label="Image"
                                    className={classes.textField}
                                    type="file"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={handleChangeImage}
                                />

                                <MapPickPosition />

                            </div>
                        </div>
                        <div onClick={handleSubmitChangeRestaurantInfo} className="makeStyles-cardFooter-554">
                            <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                                tabIndex={0} type="button">
                                <span className="MuiButton-label">Create Dish</span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                        </div>
                    </div>
                }



            </Card>
        </div>
    )
}
