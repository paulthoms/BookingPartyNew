import React from 'react';
import { deleteAPI, getAPI, postAPI } from '../../Normal/shared/APICaller';
import { useAdminResContext } from '../context/useAdminResContext';
import swal from 'sweetalert';

export default function DeleteButton(props) {

    const {
        updateAllDish,
        updateAllBooking
    } = useAdminResContext();

    function handleDeleteUser(e) {


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const formData = new FormData();
                    formData.append('ID', props.id);
                    postAPI(props.api, formData, function (res) {
                        getAPI('/booking-restaurant', function (res) {
                            updateAllBooking(res.data.data);
                        })
                    })
                } else {
                    swal("Your all booking is safe!");
                }
            });

    }

    return (
        <>
            <button onClick={handleDeleteUser} className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                tabIndex={0} type="button">
                <span className="MuiButton-label">Delete</span>
            </button>
        </>
    )
}
