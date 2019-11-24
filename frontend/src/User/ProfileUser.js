import React, { useEffect, useState } from 'react';
import { Icon } from '@material-ui/core';
import { checkUserNav } from '../Normal/shared/CheckUser';
import { useAppContext } from '../contextApp/useContextApp';
import Info from './Info';
import BookingHistory from './BookingHistory';
import Edit from './Edit';

export default function ProfileUser() {



    console.log(checkUserNav(localStorage.getItem('user-role')));


    const [tab, setTab] = useState("info");
    const {
        user,
        updateTabProfile,
        tabProfile,
        allBooking
    } = useAppContext();

    useEffect(() => {

        if (checkUserNav("1") === false) {
            localStorage.clear();
            window.location.href = "/home";
        }

    }, []);

    function handleChangeTab(value) {
        updateTabProfile(value);
    }


    return (
        <div className="profile__group" >

            <div className="profile__tab" >

                <div className="profile__tab-nameUser" >
                    <div className="profile__tab-nameUser-image" ><Icon>person</Icon></div>
                    <div className="profile__tab-nameUser-name" >{user.Name}</div>
                </div>
                <div className="profile__tab-singleTab-group" >
                    <div onClick={() => handleChangeTab("info")} className={tabProfile === "info" ? "profile__tab-singleTab profile__tab-active" : "profile__tab-singleTab"} >
                        Info
                    </div>

                    <div onClick={() => handleChangeTab("booking")} className={tabProfile === "booking" ? "profile__tab-singleTab profile__tab-active" : "profile__tab-singleTab"} >
                        Booking history
                    </div>

                </div>
            </div>
            <div className="profile__info">
                {
                    tabProfile == "info" && <Info user={user} />
                }
                {
                    tabProfile == "booking" && <BookingHistory />
                }
                {
                    tabProfile == "edit" && <Edit allBooking={allBooking} />
                }

            </div>

        </div>
    )
}
