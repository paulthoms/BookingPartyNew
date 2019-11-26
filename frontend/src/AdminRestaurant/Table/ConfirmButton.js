import React, { useState } from 'react';
import { deleteAPI, getAPI, postAPI } from '../../Normal/shared/APICaller';
import { useAdminResContext } from '../context/useAdminResContext';

export default function ConfirmButton(props) {

    const {
        updateAllDish,
        updateAllBooking,
        updateLoadingConfirm
    } = useAdminResContext();

    const [status, setStatus] = useState(props.status);

    function handleConfirm(e) {
        console.log(props);
        setStatus(1);
        const formData = new FormData();
        formData.append('ID', props.id);
        formData.append('Email', props.email);

        postAPI(props.api, formData, function (res) {
            getAPI('/booking-restaurant', function (res) {
                setTimeout(() => {
                    updateAllBooking(res.data.data);
                })
            })
        })


    }

    return (
        <>
            <td style={{ textAlign: "center" }} >{status}</td>
            <button onClick={handleConfirm} disabled={props.status !== 0} type="button" className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                tabIndex={0} type="button">
                <span className="MuiButton-label">Confirm</span>
            </button>
        </>
    )
}
