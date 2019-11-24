import React, { useEffect, useState } from 'react';
import { login, getAPIWithoutUser } from '../../Normal/shared/APICaller';
import swal from 'sweetalert';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [focusPassword, setFocusPassword] = useState(false);
    function handleOnFoucusFocusPassword() {
        setFocusPassword(true);
    }
    function handleOnBlurFocusPassword() {
        setFocusPassword(false);
    }

    const [focusUsername, setFocusUsername] = useState(false);
    function handleOnFoucusFocusUsername() {
        setFocusUsername(true);
    }
    function handleOnBlurFocusUsername() {
        setFocusUsername(false);
    }
    function handleOnclickLogin() {
        var bodyFormData = new FormData();
        bodyFormData.set("Name", userName);
        bodyFormData.set("Password", password);

        login("login", bodyFormData, function (res) {
            console.log(res);
            try {
                if (res.data.status === "ok") {
                    localStorage.clear();
                    localStorage.setItem("token", res.data.token.token);
                    localStorage.setItem("user-role", res.data.token.role);
                    window.location.href = "admin";
                }
                else {
                    swal("Username or password is wrong");
                }
            }
            catch(e){
                swal("Username or password is wrong");
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
        <div className="container-login">
            <div className="login-box" style={{ color: 'while' }}>
                <h1>Đăng nhập</h1>
                <div className="MuiGrid-root makeStyles-grid-356 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-3">
                    <div className="MuiFormControl-root undefined makeStyles-formControl-206 MuiFormControl-fullWidth">
                        <label className={"MuiFormLabel-root MuiInputLabel-root makeStyles-labelRoot-201 MuiInputLabel-formControl MuiInputLabel-animated " + (focusUsername && 'MuiInputLabel-shrink ') + (userName != '' && " MuiInputLabel-shrink MuiInputLabel-filled")} data-shrink="false" htmlFor='username' >User Name</label>
                        <div className={"MuiInputBase-root MuiInput-root MuiInput-underline makeStyles-underline-198 MuiInputBase-formControl MuiInput-formControl " + (focusUsername && 'Mui-focused')}>
                            <input aria-invalid="false" onChange={handleChangeName} onFocus={handleOnFoucusFocusUsername} onBlur={handleOnBlurFocusUsername} className="MuiInputBase-input MuiInput-input" id='username' value={userName} type="text" />
                        </div>
                    </div>
                </div>
                <div className="MuiGrid-root makeStyles-grid-356 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-3">
                    <div className="MuiFormControl-root undefined makeStyles-formControl-206 MuiFormControl-fullWidth">
                        <label className={"MuiFormLabel-root MuiInputLabel-root makeStyles-labelRoot-201 MuiInputLabel-formControl MuiInputLabel-animated " + (focusPassword && 'MuiInputLabel-shrink ') + (password != '' && " MuiInputLabel-shrink MuiInputLabel-filled")} data-shrink="false" htmlFor="password" >Password</label>
                        <div className={"MuiInputBase-root MuiInput-root MuiInput-underline makeStyles-underline-198 MuiInputBase-formControl MuiInput-formControl " + (focusPassword && 'Mui-focused')}>
                            <input aria-invalid="false" onChange={handleChangePassword} onFocus={handleOnFoucusFocusPassword} onBlur={handleOnBlurFocusPassword} className="MuiInputBase-input MuiInput-input" id='password' value={password} type="password" />
                        </div>
                    </div>
                </div>
                <button onClick={handleOnclickLogin} className="btn">Đăng nhập</button>
            </div>
        </div>
    );
}

export default Login;
