import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Table from '../Table/Table';
import { useAdminContext } from '../context/useAdminContext';

const HeadTable = ["UserName", "Email", "Phone", "checkMail"];

function UserPage() {

    const {
        allUser
    } = useAdminContext();

    return (
        <Card key='User' name="All User" >
            <Table headTable={HeadTable} allUser={allUser} api={"/user/"} />
        </Card>
    );
}

export default UserPage;
