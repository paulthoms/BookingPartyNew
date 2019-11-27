import React from "react";
import { useImmer } from "use-immer";
import HomePage from '../Normal/home/HomePage';
import BookingPage from '../Normal/booking/BookingPage';
import AboutRestaurant from '../Normal/about-restaurant/AboutRestaurant';
import AdminLogin from '../Admin/Login/Login';

import AdminRestaurant from '../AdminRestaurant/AdminRestaurant';
import Admin from '../Admin/Admin';
import Normal from '../Normal/NormalPage';
import AdminResLogin from '../AdminRestaurant/Login/Login';
import ProfileUser from '../User/ProfileUser';
import Edit from "../User/Edit";
import Search from '../Normal/Search/SearchResult';
import ForgotPassword from "../User/Register/ForgotPassword";


const defaultState = {
    NavigationConfig: [
        // {
        //     id: "home_page",
        //     title: "Home",
        //     url: "/",
        //     component: HomePage,
        //     layout: "normal"
        // },
        {
            id: "home_page",
            title: "Home",
            url: "/home",
            component: HomePage,
            layout: "normal"
        },
        // {
        //     id: "booking_page",
        //     title: "Booking",
        //     url: "/booking",
        //     component: BookingPage,
        //     layout: "normal"
        // },
        {
            id: "detail_restaurant",
            url: "/about/restaurant/:slug",
            component: AboutRestaurant,
            layout: "normal"
        },
        {
            id: "adminLogin",
            url: "/admin-login",
            component: AdminLogin,
            layout: "normal"
        },
        {
            id: "logout",
            title: "Logout",
            url: "/home",
            component: HomePage,
            layout: "logout"
        },
        {
            id: "login",
            title: "Login",
            url: "/home",
            component: HomePage,
            layout: "login"
        },
        {
            id: "register",
            title: "Register",
            url: "/register",
            component: HomePage,
            layout: "register"
        },
        {
            id: "admin",
            url: "/admin",
            component: Admin,
            layout: "admin"
        },
        {
            id: "forgotPass",
            url: "/forgot-pass",
            component: ForgotPassword,
            layout: "forgot-pass"
        },
        {
            id: "adminrestaurant",
            url: "/adminres",
            component: AdminRestaurant,
            layout: "admin"
        },
        {
            id: "adminres-login",
            url: "/adminres-login",
            component: AdminResLogin,
            layout: "adminres"
        },
        {
            id: "profile",
            url: "/profile",
            component: ProfileUser,
            layout: "user"
        },
        {
            id: "edit",
            url: "/edit/:slug/:resID",
            component: Edit,
            layout: "user"
        },
        {
            id: "checkmail",
            url: '/checkmail/:slug',
            component: HomePage,
            layout: "checkmail"
        },
        {
            id: "Search",
            url: '/search',
            component: Search,
            layout: 'normal'
        }

    ],
    NavBar: [
        {
            id: "home_page",
            title: "Home",
            url: "/home",
        },
        // {
        //     id: "booking",
        //     title: "Booking",
        //     url: "/booking",
        // },
        {
            id: "login",
            title: "Login",
            url: "/login",
        },
        {
            id: "logout",
            title: "Logout",
            url: "/home",
        },
        // {
        //     id: "profile",
        //     title: "profile",
        //     url: "/profile",
        // },
        {
            id: "register",
            title: "Register",
            url: "/register",
        },
        {
            id: "forgotpass",
            url: "/forget-pass"
        }
    ]
    ,
    isLogin: false,
    allRestaurant: [],
    userRole: localStorage.getItem("user-role"),
    user: {},
    tabProfile: "info",
    dataEditBookingUser: [],
    allBooking: [],
    restaurantFilter: [],
    districtFilter: [],
    typeRestaurantFilter: [],
    searchResult: []
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useImmer({ ...defaultState });

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
