import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Table from '../Table/TableRorRestaurant';
import { useAdminContext } from '../context/useAdminContext';

const HeadTable = ["Restaurant","Address"]

function RestaurantOwnerPage() {

    const {
        allRestaurant
    } = useAdminContext();

    return (
        <Card key="Restaurant" name="Restaurant">
            <Table allRestaurant={allRestaurant} headTable={HeadTable} api="/restaurant/" />
        </Card>
    );
}

export default RestaurantOwnerPage;
