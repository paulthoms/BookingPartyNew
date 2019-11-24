import React, { useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import { checkUserNav } from '../Normal/shared/CheckUser';

import { AdminResProvider } from './context/context';

function AdminRestaurant() {


    useEffect(() => {

        if (checkUserNav("2")===false) {
            localStorage.clear();
            window.location.href = "adminres-login";
        }

    }, []);


    return (
        <AdminResProvider>
            <div>
                <SideBar />
                <Content />
            </div>
        </AdminResProvider>
    );
}

export default AdminRestaurant;