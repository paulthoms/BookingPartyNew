import React from 'react';
import { useAppContext } from "../contextApp/useContextApp";
import { Route, Switch } from 'react-router-dom';
import NarBar from './shared/NavBar';

export default function NormalPage() {

    const {
        NavigationConfig
    } = useAppContext();

    return (
        <>
            {/* {
                NavigationConfig.map((item, index) => {
                    return <Route exact path={item.url} component={item.component} />
                })
            } */}
        </>
    )
}
