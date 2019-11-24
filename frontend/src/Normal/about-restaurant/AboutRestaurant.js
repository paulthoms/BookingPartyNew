import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../contextApp/useContextApp';
import { getAPIWithoutUser, postAPI } from '../shared/APICaller';
import Map from './Map';
import swal from 'sweetalert';

export default function AboutRestaurant(props) {

    var id = props.match.params.slug;
    console.log(props.userID)
    const {
        allRestaurant,
        user
    } = useAppContext();

    const [restaurant, setRestaurant] = useState();
    const [dish, setDish] = useState([]);
    const [loading, setLoading] = useState(true);

    //data booking

    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [adult, setAdult] = useState();
    const [child, setChild] = useState();
    const [description, setDescription] = useState();
    const [userID, setUserID] = useState(localStorage.getItem("userID"));
    const [resID, setResID] = useState(id);


    //end data booking

    useEffect(() => {

        var id = props.match.params.slug;
        getAPIWithoutUser("/pub/restaurant/" + id, function (res) {
            console.log(res);
            setRestaurant(res.data.data[0]);
            setLoading(false);
        })
        getAPIWithoutUser("/pub/dish/" + id, function (res) {
            console.log(res);
            setDish(res.data.data);
        })

    }, []);

    function handleChangeDate(e) {
        console.log(e.target.value);
        setDate(e.target.value);
    }

    function handleChangeTime(e) {
        console.log(e.target.value);
        setTime(e.target.value);
    }

    function handleChangeNumberAdult(e) {
        console.log(e.target.value);
        setAdult(e.target.value);
    }

    function handleChangeNumberChild(e) {
        console.log(e.target.value);
        setChild(e.target.value);
    }


    function handleChangeDescription(e) {
        console.log(e.target.value);
        setDescription(e.target.value);
    }

    function handleBookingParty() {

        var bodyFormData = new FormData();
        bodyFormData.set("Time", date + " " + time);
        bodyFormData.set("Member", adult + " người lớn và " + child + " trẻ em");
        bodyFormData.set("Restaurant_ID", resID);
        bodyFormData.set("Description", description);

        postAPI('/booking/new', bodyFormData, function (res) {
            if (res.data.status !== "error") {
                console.log(res);
                swal("Booking success!!!");
            }
            else {
                swal("somwthing went wrong!!!");
            }
        });

    }





    return (
        <article class="deltail-restaurant">
            {console.log(user)}

            <section class="deltail-restaurant__banner">
                {
                    loading ? <>loading...</> :
                        <div class="hero-image"
                            style={
                                {
                                    backgroundImage: `url(${"/uploads/" + restaurant.Image})`
                                }
                            }
                        >
                        </div>
                }
            </section>

            {
                loading ? <>Loading ...</> :
                    <div class="hero-text" style={{ color: "#ef4937" }} >
                        <h1 style={{ fontSize: "50px" }}>{restaurant.Name}</h1>
                        <h3>{restaurant.Type}</h3>
                        <h3>{restaurant.Address}</h3>
                    </div>
            }

            <section class="deltail-restaurant__container">

                <div class="deltail-restaurant__container-menu">
                    {
                        dish.map((item) => {
                            console.log(item)
                            return (
                                <div class="container-menu__dish">
                                    <img src={`/uploads/${item.Image}`} alt="Anh" class="container-menu__dish__img" />
                                    <div class="container-menu__dish__description">
                                    </div>
                                    <div className="container-menu__dish__group" >
                                        <div className="container-menu__dish__Name" >
                                            {item.Name}
                                        </div>
                                        <div className="container-menu__dish__cost" >
                                            {item.Cost}
                                        </div>
                                        <div className="container-menu__dish__description">
                                            {item.Description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

                <div class="deltail-restaurant__container-booking">
                    <div class="deltail-restaurant__container-booking-box">
                        <h2>Đặt chỗ trước kèm ưu đãi</h2>
                        <div class="deltail-restaurant__container-booking__element">
                            <p>Nên đặt trước khi đến từ 30 phút!</p>
                            <div class="text-center"></div>
                        </div>
                        <div class="deltail-restaurant__container-booking__element">
                            <div class="input-group">
                                <input onChange={handleChangeDate} type="date" name="Ngày" id="date" class="input-group-btn" />
                                <input onChange={handleChangeTime} type="time" name="Giờ" id="time" class="input-group-btn" />
                            </div>

                            <div class="input-group">
                                <input onChange={handleChangeNumberAdult} type="number" name="so-tre-em" id="so-nguoi-lon" class="input-group-btn" min="1"
                                    max="50" placeholder="Số người lớn" />
                                <input onChange={handleChangeNumberChild} type="number" name="so-tre-em" id="so-tre-em" class="input-group-btn" min="1"
                                    max="50" placeholder="Số trẻ em" />
                                <textarea onChange={handleChangeDescription} name="Note" id="note" class="" cols="70" rows="1"
                                    placeholder="Thêm ghi chú vào đây..."></textarea>

                                <div class="deltail-restaurant__container-booking__element">
                                    <button onClick={handleBookingParty} class="" type="button">Đặt chỗ ngay</button>
                                </div>

                                <div class="deltail-restaurant__container-booking__element">
                                    Hoặc gọi tới  để đặt chỗ và được tư vấn
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {
                loading ? <>Loading ...</> :
                    <>
                        {
                            restaurant.PositionMap ?
                                <div style={{
                                    width: "90%",
                                    marginLeft: "50%",
                                    transform: "translateX(-50%)"
                                }} >
                                    <Map position={restaurant.PositionMap.split(',').map((item) => { return parseFloat(item) })} />
                                </div>
                                : <></>
                        }
                    </>
            }

        </article >
    )
}
