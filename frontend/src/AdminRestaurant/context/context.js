import React from "react";
import { useImmer } from "use-immer";
import DishesPage from "../Dish/DishesPage";
import EditProfilePage from "../EditProfile/EditProfilePage";
import CreateDish from "../CreateDish/CreateDish";
import BookingPage from "../Booking/BookingPage";
import EditRestaurant from "../EditRestaurant/EditRestaurantPage";
import EditDish from "../Table/EditDish";


const defaultState = {
    NavigationConfig: [
        {
            id: "dish",
            title: "Dish",
            component: DishesPage
        },
        {
            id: "book",
            title: "Booking",
            component: BookingPage
        },
        {
            id: "dish",
            title: "Create Dish",
            component: CreateDish
        },
        {
            id: "editprofile",
            title: "Edit Profile",
            display: 'none',
            component: EditProfilePage
        },
        {
            id: "editRestaurant",
            title: "Edit Restaurant",
            component: EditRestaurant
        },
        {
            id: "editDish",
            title: "Edit Dish",
            display: 'none',
            component: EditDish
        }
    ],
    isLogin: false,
    titleContent: "Dish",
    allDish: [],
    allBooking: [],
    restaurantSelf: [],
    mapPicker: [],
    dataEditDish: [],
    dataEditProfile: [],
    loadingConfirm: false
};

const AdminResContext = React.createContext();

const AdminResProvider = ({ children }) => {
    const [state, dispatch] = useImmer({ ...defaultState });

    return (
        <AdminResContext.Provider value={[state, dispatch]}>
            {children}
        </AdminResContext.Provider>
    );
};

export { AdminResProvider, AdminResContext };