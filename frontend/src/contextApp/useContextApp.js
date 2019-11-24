import { useContext, useEffect } from "react";

import { AppContext } from "./context";
import { getAPIWithoutUser } from '../Normal/shared/APICaller';
const jwt = require('jsonwebtoken');

const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {

        //get allRestaurant
        getAPIWithoutUser("/pub/restaurant", function (res) {
            console.log(res.data);
            if (res.data.data.length) {
                dispatch((draft) => {
                    draft.allRestaurant = res.data.data;
                })

                dispatch((draft) => {
                    draft.restaurantFilter = res.data.data;
                })

            }
        });

        dispatch((draft) => {
            draft.userRole = localStorage.getItem("user-role");
        });

        jwt.verify(localStorage.getItem('token'), 'secretKey', function (err, authData) {
            if (err) {
                dispatch((draft) => {
                    localStorage.clear();
                    draft.user = {};
                });
            }
            else {
                console.log(authData);
                localStorage.setItem('userID', authData.user.ID);
                dispatch((draft) => {
                    draft.user = authData.user;
                });
            }
        });




    }, [])

    function updateCheckActive(value) {
        dispatch((draft) => {
            draft.checkActive = value;
        })
    }

    function updateIsLogin(value) {
        dispatch((draft) => {
            draft.isLogin = value;
        })
    }

    function updateNavigationConfig(role) {

    }

    function updateNavBar(NavBar) {
        dispatch((draft) => {
            draft.NavBar = NavBar;
        })
    }

    function updateTabProfile(tab) {
        dispatch((draft) => {
            draft.tabProfile = tab;
        })
    }

    function updateDataEditBookingUser(data) {
        dispatch((draft) => {
            draft.dataEditBookingUser = data;
        })
    }

    function updateAllBooking(data) {
        dispatch((draft) => {
            draft.allBooking = data;
        })
    }

    function updateDistrictFilter(data) {
        dispatch((draft) => {
            draft.districtFilter = data;
        })
    }

    function updateTypeRestaurantFilter(data) {
        dispatch((draft) => {
            draft.typeRestaurantFilter = data;
        })
    }

    function updateRestaurantFilter(restaurantFilter) {
        console.log(restaurantFilter);
        dispatch((draft) => {
            draft.restaurantFilter = restaurantFilter;
        })
    }

    function updateSearchResult(data) {
        dispatch((draft) => {
            draft.searchResult = data;
        })
    }

    return {
        ...state,
        updateNavigationConfig,
        updateIsLogin,
        updateNavBar,
        updateTabProfile,
        updateDataEditBookingUser,
        updateAllBooking,
        updateRestaurantFilter,
        updateDistrictFilter,
        updateTypeRestaurantFilter,
        updateSearchResult

    };
};

export { useAppContext };
