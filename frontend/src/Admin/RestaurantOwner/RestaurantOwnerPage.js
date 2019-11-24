import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Table from '../Table/TableForRestaurantOwner';
import { useAdminContext } from '../context/useAdminContext';

const HeadTable = ["Name", "Restaurant"]

function RestaurantOwnerPage() {

    const {
        allRestaurantOwer
    } = useAdminContext();

    return (
        <Card key="Restaurant Owner" name="Restaurant Owner">
            <Table allUser={allRestaurantOwer.data} headTable={HeadTable} api="/restaurant-owners/" />
        </Card>
    );
}

export default RestaurantOwnerPage;
