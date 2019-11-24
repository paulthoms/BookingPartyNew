import React, { useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';
import { checkUserNav } from '../Normal/shared/CheckUser';

import { AdminProvider } from './context/context';

function Admin() {

    useEffect(() => {

        if (checkUserNav("0") === false) {
            localStorage.clear();
            window.location.href = "admin-login";
        }


    }, []);

    return (
        <AdminProvider>
            <div>
                <SideBar />
                <Content />
            </div>
        </AdminProvider>
    );
}

export default Admin;