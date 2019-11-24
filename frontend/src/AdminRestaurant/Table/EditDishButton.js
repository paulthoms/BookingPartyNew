import React, { useEffect } from 'react';
import { useAdminResContext } from '../context/useAdminResContext';
import { getAPI } from '../../Normal/shared/APICaller';

export default function EditDish(props) {

    const {
        updateTitleContent,
        updateDataEditDish
    } = useAdminResContext();

    useEffect(() => {
        console.log(props.api);
    })

    function handleChange() {

        console.log(props.api);

        getAPI(props.api, function (res) {
            // console.log(res.data.data);
            if (res.data) {
                updateDataEditDish(res.data.data);
                console.log(res.data.data);
                updateTitleContent("Edit Dish");
            }
        })
    }

    return (
        <>
            <button onClick={handleChange} className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                tabIndex={0} type="button">
                <span className="MuiButton-label">Edit</span>
            </button>
        </>
    )
}
