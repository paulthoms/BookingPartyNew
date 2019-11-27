import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Table from '../Table/TableBooking';
import variables from '../context/variables';
import { useAdminResContext } from '../context/useAdminResContext';

const headTable = ["Time", "Member", "UserName", "Email", "Phone", "Description", "Status"]

function BookingPage() {

    const {
        allBooking
    } = useAdminResContext();

    return (
        <Card key='User' name="All Booking">
            <Table allBooking={allBooking} headTable={headTable} apiDelete={"/booking-restaurant/delete"} apiConfirm={"/booking-restaurant-comfirm-status"} />
        </Card>
    );
}

export default BookingPage;
