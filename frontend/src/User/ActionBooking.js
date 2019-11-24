import React from 'react';
import Button from '@material-ui/core/Button';
import { useAppContext } from '../contextApp/useContextApp';
import { Link } from 'react-router-dom';
import { postAPI } from '../Normal/shared/APICaller';

export default function ActionBooking(props) {

    const {
        updateTabProfile,
        updateDataEditBookingUser,
        allBooking,
        dataEditBookingUser
    } = useAppContext();

    function handleEdit(id) {
        console.log(id);
        var tmp = allBooking.filter((item) => {
            return item.ID == id;
        });

        console.log(tmp);

        updateDataEditBookingUser(tmp);

        // updateTabProfile("edit")
    }

    function handleDeleteBooking(id, resID) {
        var bodyFormData = new FormData();
        bodyFormData.set("Restaurant_ID", resID);
        bodyFormData.set("ID", id);

        postAPI("/booking/delete", bodyFormData, function (res) {
            console.log(res);
        });


    }

    return (
        <div>
            <Link to={`/edit/${props.id}/${props.idRes}`} >
                <Button onClick={() => handleEdit(props.id, props.idRes)} variant="outlined" color="secondary">
                    Edit
                </Button>
            </Link>
            {/* <Button onClick={() => { handleDeleteBooking(props.id, props.idRes) }} variant="outlined" color="secondary">
                Delete
            </Button> */}
        </div>
    )
}
