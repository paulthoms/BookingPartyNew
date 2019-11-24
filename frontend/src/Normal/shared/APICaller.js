import axios from "axios";
import { checkUserNav } from '../shared/CheckUser';
import swal from 'sweetalert';

export function getAPI(strAPI, callback) {
    axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";
    axios.defaults.headers["Authorization"] = "Bearer " + localStorage.getItem('token');

    axios.get(strAPI).then(_res => {
        callback(_res);
    }).catch(function (error) {
        console.log(error);
        callback([]);
    });
}

export function login(strAPI, data, callback) {
    console.log(data)
    axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";
    axios({
        method: "post",
        url: strAPI,
        data: data,
        config: {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }).then(data => {
        if (data.data.token.role == 0 || data.data.token.role == 2) {
            callback(data)
        }
        else {
            callback({
                status: "error",
                msg: "unknow error",
                data: null
            });
        }
    }).catch(function (error) {
        callback({
            status: "error",
            msg: "unknow error",
            data: null
        });
    });
}

export function userLogin(strAPI, data, callback) {
    console.log(data)
    axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";
    axios({
        method: "post",
        url: strAPI,
        data: data,
        config: {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }).then(data => {
        console.log(data);
        if (data.data.token.role == 1) {
            callback(data)
        }
        if (data.data.token.status === "error") {
            callback({
                status: "error",
                msg: "unknow error",
                data: null
            });
        }
    }).catch(function (error) {
        callback({
            status: "error",
            msg: "unknow error",
            data: null
        });
    });
}

export function getAPIWithoutUser(strAPI, callback) {
    axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";

    axios.get(strAPI).then(_res => {
        callback(_res);
    })
        .catch(function (error) {
            console.log(error);
            callback([]);
        });

}

export function postAPI(strAPI, data, callback) {

    if (checkUserNav(localStorage.getItem('user-role')) === false) {
        localStorage.clear();
        window.location.href = "/home";
        swal("please login to booking");
    }
    else {
        axios({
            method: "post",
            url: strAPI,
            data: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then(data => {
            callback(data)
        }).catch(function (error) {
            swal("something went wrong!!");
            callback({
                status: "error",
                msg: "unknow error",
                data: null
            });
        });
    }

}

export function postAPIWithoutToken(strAPI, data, callback) {
    axios({
        method: "post",
        url: strAPI,
        data: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(data => {
        callback(data)
    }).catch(function (error) {
        callback({
            status: "error",
            msg: "unknow error",
            data: null
        });
    });

}

export function registerUser(strAPI, data, callback) {

    axios({
        method: "post",
        url: strAPI,
        data: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(data => {
        callback(data)
    }).catch(function (error) {
        callback({
            status: "error",
            msg: "unknow error",
            data: null
        });
    });

}

export function putAPI(strAPI, data, callback) {

    if (checkUserNav(localStorage.getItem('user-role')) === false) {
        localStorage.clear();
        window.location.href = "/home";
        swal("please login to booking");
    }
    else {
        axios({
            method: "put",
            url: strAPI,
            data: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then(data => {
            callback(data)
        }).catch(function (error) {
            callback({
                status: "error",
                msg: "unknow error",
                data: null
            });
        });
    }

}

export function deleteAPI(strAPI, callback) {
    axios({
        method: "delete",
        url: strAPI,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "authorization": "Bearer " + localStorage.getItem('token')
        }
    }).then(data => {
        callback(data)
    }).catch(function (error) {
        callback({
            status: "error",
            msg: "unknow error",
            data: null
        });
    });
}
