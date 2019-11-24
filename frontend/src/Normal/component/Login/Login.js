import React, { useEffect, useState } from 'react';
import { login, getAPIWithoutUser } from '../../shared/APICaller';
// import "./login.css";

function Login() {

    useEffect(() => {

    }, []);

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    function handleOnclickLogin() {
        var bodyFormData = new FormData();
        bodyFormData.set("Name", userName);
        bodyFormData.set("Password", password);

        login("login", bodyFormData, function (res) {
            console.log(res);
            if (res.data.token.status !== "error") {
                localStorage.clear();
                localStorage.setItem("token", res.data.token.token);
                localStorage.setItem("user-role", res.data.token.role);
                window.location.href = "admin";
            }
            else {
                // swal("Username or password is wrong");
            }
        })

    }

    function handleChangeName(e) {
        setUserName(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }




    return (
        <div className="login-box">
            <h1>Đăng nhập</h1>
            <div className="textbox">
                <i className="fas fa-user" />
                <input onChange={handleChangeName} type="text" id="email" name="email" placeholder="Email hoặc Tên tài khoản" />
            </div>
            <div className="textbox">
                <i className="fas fa-lock" />
                <input onChange={handleChangePassword} type="password" id="password" name="password" placeholder="Mật khẩu" />
            </div>
            <button onClick={handleOnclickLogin} className="btn">Đăng nhập</button>
        </div>
    );
}

export default Login;
