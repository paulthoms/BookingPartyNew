import React from 'react';
import { deleteAPI, getAPI } from '../../Normal/shared/APICaller';
import { useAdminResContext } from '../context/useAdminResContext';
import swal from 'sweetalert';

export default function DeleteButton(props) {

    const {
        updateAllDish
    } = useAdminResContext();

    function handleDeleteUser(e) {
        console.log(props.api);

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteAPI(props.api, function (res) {
                        getAPI('/pub/dish/' + localStorage.getItem('idRes'), function (res) {
                            updateAllDish(res.data.data);
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                        })
                        // getAPI('/restaurant-owners',function(res){
                        //     updateAllRestaurantOwer(res.data);
                        // })
                    });
                } else {
                    swal("Your dish is safe!");
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
