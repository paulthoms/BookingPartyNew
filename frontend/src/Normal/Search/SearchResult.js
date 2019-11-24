import React from 'react';
import { useAppContext } from '../../contextApp/useContextApp';
import RestaurantCard from '../home/RestaurantCard';
import { Link } from 'react-router-dom';

export default function SearchResult() {

    const {
        searchResult
    } = useAppContext();


    return (
        <div style={{ display: "flex" }} >
            {console.log("hello")}
            {
                searchResult.map((item) => {
                    return (
                        <Link to={`/about/restaurant/${item.ID}`} >
                            <RestaurantCard data={item} />
                        </Link>
                    )
                })
            }
        </div>
    )
}
