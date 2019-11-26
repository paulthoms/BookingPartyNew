import React from 'react';
import SelectFilter from './SelectFilter';
import SelectTypeRestaurant from './SelectTypeRestaurant';
import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { useAppContext } from '../../contextApp/useContextApp';
import { array } from 'prop-types';

function checkExist(arr, value) {
    for (let i in arr) {
        if (arr[i].includes(value)) {
            console.log(i);
            return i;
        }
    }
    return -1;
}

function checkExistAddress(arr,value){
    for(let i in arr){
        if(value.includes(arr[i])){
            return i;
        }
    }
    return -1;
}


export default function FilterRestaurant() {

    const {
        allRestaurant,
        restaurantFilter,
        districtFilter,
        typeRestaurantFilter,
        updateRestaurantFilter,
        updateDistrictFilter,
        updateTypeRestaurantFilter
    } = useAppContext();

    function handleClear() {
        updateRestaurantFilter(allRestaurant);
        updateDistrictFilter([]);
        updateTypeRestaurantFilter([]);
    }

    function handleGetFilter(e) {
        var resultRestaurant = [];
        for (let i in restaurantFilter) {
            console.log(restaurantFilter[i]);
            console.log(checkExist(districtFilter, restaurantFilter[i].Address));
            if (districtFilter.length === 0 && typeRestaurantFilter !== 0) {
                if (checkExist(typeRestaurantFilter, restaurantFilter[i].Type) !== -1) {
                    resultRestaurant.push(restaurantFilter[i]);
                }
            }
            if (typeRestaurantFilter.length === 0 && districtFilter.length !== 0) {
                if (checkExistAddress(districtFilter, restaurantFilter[i].Address) !== -1) {
                    resultRestaurant.push(restaurantFilter[i]);
                }
            }

            if (districtFilter.length !== 0 && typeRestaurantFilter.length !== 0) {
                if (checkExistAddress(districtFilter, restaurantFilter[i].Address) !== -1 && checkExistAddress(typeRestaurantFilter, restaurantFilter[i].Type) !== -1) {
                    resultRestaurant.push(restaurantFilter[i]);
                }
            }

        }

        console.log(resultRestaurant);
        updateRestaurantFilter(resultRestaurant);

    }


    return (
        <div className = "discovery-restaurant__filter">
            <SelectFilter />
            <SelectTypeRestaurant />
            <Button onClick={handleGetFilter} variant="contained" color="primary">
                Search
            </Button>
            <Button onClick={handleClear} variant="contained" color="primary">
                Clear
            </Button>
        </div>
    )
}
