import React, { useEffect } from 'react';
import Slide from './Slide';
import BestRestaurant from './BestRestaurant';
import DiscoveryRestaurant from './DiscoveryRestaurant';
import { getAPIWithoutUser } from '../shared/APICaller';

export default function HomePage(props) {

    useEffect(() => {
        if (props.match.params.slug) {
            getAPIWithoutUser('/checkmail/' + props.match.params.slug, function (res) {
                console.log(res);
            });
        }
    }, [])

    return (
        <div className="home__main">
            <Slide />
            <BestRestaurant />
            <DiscoveryRestaurant />
        </div>
    )
}
