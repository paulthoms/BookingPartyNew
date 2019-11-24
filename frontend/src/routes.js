import HomePage from './Normal/home/HomePage';
import BookingPage from './Normal/booking/BookingPage';
import AboutRestaurant from './Normal/about-restaurant/AboutRestaurant';
import AdminLogin from './Normal/component/Login/Login'


const NavigationConfig = [

    {
        id: "home_page",
        title: "Home",
        url: "/home",
        component: HomePage
    },
    {
        id: "booking_page",
        title: "Booking",
        url: "/booking",
        component: BookingPage
    },
    {
        id: "detail_restaurant",
        url: "/about/restaurant/:slug",
        component: AboutRestaurant
    },
    {
        id: "adminLogin",
        url: "/admin-login",
        component: AdminLogin
    }

]

export default NavigationConfig;