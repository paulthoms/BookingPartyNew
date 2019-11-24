import { useContext, useEffect } from "react";
import { AdminResContext } from "./context";

import { getAPI } from '../../Normal/shared/APICaller';

const useAdminResContext = () => {
    const [state, dispatch] = useContext(AdminResContext);

    useEffect(() => {

        getAPI('/pub/dish/' + localStorage.getItem('idRes'), function (res) {
            dispatch((draft) => {
                draft.allDish = res.data.data;
            })
        });

        getAPI('/booking-restaurant', function (res) {
            console.log(res[0]);
            dispatch((draft) => {
                draft.allBooking = res.data.data
            })
        });

        getAPI('/restaurant-owner-seft', function (res) {
            getAPI('/pub/restaurant/' + res.data.data[0].Restaurant_ID, function (_res) {
                console.log(_res.data.data[0]);
                dispatch((draft) => {
                    draft.restaurantSelf = _res.data.data;
                })
            });
        });

    }, [])

    function updateIsLogin(value) {
        dispatch((draft) => {
            draft.isLogin = value;
        })
    }

    function updateNavigationConfig(role) {

    }

    function updateTitleContent(title) {
        dispatch((draft) => {
            draft.titleContent = title;
        })
    }

    function updateAllDish(data) {
        dispatch((draft) => {
            draft.allDish = data;
        })
    }

    function updateAllBooking(data) {
        dispatch((draft) => {
            draft.allBooking = data
        })
    }

    function updateMapPicker(data) {
        dispatch((draft) => {
            draft.mapPicker = data;
        })
    }

    function updateDataEditDish(data) {
        dispatch((draft) => {
            draft.dataEditDish = data;
        })
    }

    function updateDataEditProfile(data) {
        dispatch((draft) => {
            draft.dataEditProfile = data;
        })
    }

    return {
        ...state,
        updateNavigationConfig,
        updateIsLogin,
        updateTitleContent,
        updateAllDish,
        updateAllBooking,
        updateMapPicker,
        updateDataEditDish,
        updateDataEditProfile
    };
};

export { useAdminResContext };