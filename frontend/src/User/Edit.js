import React, { useState, useEffect } from 'react';
import Card from '../Normal/component/Card/Card';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { postAPI, putAPI, getAPI } from '../Normal/shared/APICaller';
import { useAppContext } from '../contextApp/useContextApp';
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

function Edit(props) {
    const classes = useStyles();

    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [adult, setAdult] = useState();
    const [child, setChild] = useState();
    const [booking, setBooking] = useState({});
    const [loading, setLoading] = useState(true);

    const {
        dataEditBookingUser
    } = useAppContext();

    useEffect(() => {

        console.log(props);
        getAPI("/booking/" + props.match.params.slug, function (res) {
            console.log(res);
            setBooking(res.data[0]);
            setLoading(false);
        })

    }, [])


    function handleOnSubmit(e) {

        var bodyFormData = new FormData();
        bodyFormData.set("Time", date + " " + time);
        bodyFormData.set("Member", adult + " người lớn  và " + child + " trẻ em");
        bodyFormData.set("Restaurant_ID", props.match.params.resID);
        bodyFormData.set("ID", props.match.params.slug);


        putAPI('/booking/update', bodyFormData, function (res) {
            if (res.data.status !== "error") {
                swal("change booking sucsess!!!");
            }
            else {
                swal("something went wrong!!!");
            }
        });


    }

    function handleOnChangeTime(e) {
        setTime(e.target.value);
    }

    function handleOnChangeDate(e) {
        setDate(e.target.value);
    }

    function handleOnChangeAdult(e) {
        setAdult(e.target.value);
    }

    function handleOnChangeChild(e) {
        setChild(e.target.value);
    }





    return (
        <>

            {loading ? "loading..." :
                <div key="Create Dish" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
                    <div className="makeStyles-cardBody-371">
                        <div> Edit booking for restaurant {booking.Res_name} </div>
                        <div className="MuiGrid-root makeStyles-grid-252 MuiGrid-container">
                            <TextField
                                id="outlined-password-input"
                                label="Time"
                                className={classes.textField}
                                type="time"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeTime}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Date"
                                className={classes.textField}
                                type="date"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeDate}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Number Adult"
                                className={classes.textField}
                                type="number"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeAdult}
                            />

                            <TextField
                                id="outlined-password-input"
                                label="Number Child"
                                className={classes.textField}
                                type="number"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={handleOnChangeChild}
                            />

                        </div>
                    </div>
                    <div className="makeStyles-cardFooter-554">
                        <button onClick={handleOnSubmit} className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                            tabIndex={0} type="button">
                            <span className="MuiButton-label">Change Booking</span>
                            <span className="MuiTouchRipple-root" />
                        </button>
                    </div>
                </div>
            }

        </>

    );
}

export default Edit;