import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Table from '../Table/Table';
import variables from '../context/variables';
import { useAdminResContext } from '../context/useAdminResContext';

const headTable = ["Name", "Cost", "Description"];

function DishesPage() {

    const {
        updateAllDish,
        allDish
    } = useAdminResContext();

    return (
        <Card key='User' name="All Dish">
            <Table allDish={allDish} headTable={headTable} api={"/dish/"} />
        </Card>
    );
}

export default DishesPage;
