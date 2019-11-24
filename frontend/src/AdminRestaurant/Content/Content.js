import React from 'react';

import {useAdminResContext} from '../context/useAdminResContext';
import Header from '../Header/Header';

function Content(){

    const {
        NavigationConfig,
        titleContent
    } = useAdminResContext();

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
