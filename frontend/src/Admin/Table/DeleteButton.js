import React from 'react';
import { deleteAPI, getAPI } from '../../Normal/shared/APICaller';
import { useAdminContext } from '../context/useAdminContext';
import swal from 'sweetalert';

export default function DeleteButton(props) {

    const {
        updateAllUser,
        updateAllRestaurantOwer
    } = useAdminContext();

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
                    console.log(props.api);
                    deleteAPI(props.api, function (res) {
                        getAPI('/users', function (_res) {
                            updateAllUser(_res.data)
                        })
                        getAPI('/restaurant-owners', function (_res) {
                            updateAllRestaurantOwer(_res.data);
                        })

                        if (res.data.status !== "error") {
                            swal("Delete Success!!!");
                        }
                        else {
                            swal("Something went wrong!!! This user is booking");
                        }

                    });
                } else {
                    // swal("Your  file is safe!");
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
