import React from 'react';
import { deleteAPI, getAPI, postAPI } from '../../Normal/shared/APICaller';
import { useAdminResContext } from '../context/useAdminResContext';

export default function ConfirmButton(props) {

    const {
        updateAllDish,
        updateAllBooking
    } = useAdminResContext();

    function handleConfirm(e) {
        console.log(props);
        const formData = new FormData();
        formData.append('ID', props.id);
        formData.append('Email', props.email);

        postAPI(props.api, formData, function (res) {
            getAPI('/booking-restaurant', function (res) {
                updateAllBooking(res.data.data);
            })
        })


    }

    return (
        <>
            <button onClick={handleConfirm} className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                tabIndex={0} type="button">
                <span className="MuiButton-label">Confirm</span>
            </button>
        </>
    )
}
