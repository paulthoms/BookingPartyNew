import React from 'react';

import {useAdminContext} from '../context/useAdminContext';
import Header from '../Header/Header';

function Content(){

    const {
        NavigationConfig,
        titleContent
    } = useAdminContext();

    return (
        <div className="makeStyles-mainPanel-2 ps ps--active-y">
            <Header title = {titleContent}/>
            {
                NavigationConfig.map((item,index) => {
                    const component = item.component();
                    return (titleContent === item.title && component)                   
                })
            }
        </div>
    );
}

export default Content;
