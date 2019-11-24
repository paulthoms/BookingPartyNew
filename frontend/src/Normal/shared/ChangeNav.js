
const NavUser = [
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
        id: "profile",
        title: "Profile",
        url: "/profile",
    },
    {
        id: "logout",
        title: "Logout",
        url: "/home",
    },
]

const navNormal = [
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
        url: "/home",
    },
    {
        id: "register",
        title: "Register",
        url: "/register",
    },
]

export function ChangeNav(role) {
    if (role == 1) {
        return NavUser;
    }
    else {
        return navNormal;
    }
}