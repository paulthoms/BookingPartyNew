import React from 'react';
import RestaurantCard from './RestaurantCard';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contextApp/useContextApp';

export default function BestRestaurant() {

    const {
        allRestaurant,
    } = useAppContext();

    return (
        <div className="home__best-restaurant__group" >
            <div className="home__best-restaurant__header" >
                <div className="home__best-restaurant__icon" >
                    <Icon>
                        star
                    </Icon>
                </div>
                <div className="home__best-restaurant__title" >
                    Best Restaurant
                </div>
            </div>
            <div className="home__best-restaurant" >
                {
                    allRestaurant.map((item, index) => {
                        if (index < 4) {
                            return (
                                <Link to={`/about/restaurant/${item.ID}`} >
                                    <RestaurantCard data={item} />
                                </Link>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
