import React from 'react';
import RestaurantCard from './RestaurantCard';
import Icon from '@material-ui/core/Icon';
import FilterRestaurant from "./FilterRestaurant";
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contextApp/useContextApp';


export default function DiscoveryRestaurant() {

    const {
        allRestaurant,
        restaurantFilter
    } = useAppContext();

    return (
        <div className="home__discovery-restaurant__group" >
            <div className="home__discovery-restaurant__header" >
                <div className="home__discovery-restaurant__icon" >
                    <Icon>
                        dialpad
                    </Icon>
                </div>
                <div className="home__discovery-restaurant__title" >
                    Discovery Restaurant
                </div>
            </div>
            <div className="home__discovery-restaurant" >
                <div className="home__discovery-filter" >
                    <FilterRestaurant />
                </div>
                <div className="home__discovery-filter__result" >
                    {
                        restaurantFilter.map((item, index) => {
                            return (
                                <Link to={`/about/restaurant/${item.ID}`} >
                                    <RestaurantCard data={item} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
