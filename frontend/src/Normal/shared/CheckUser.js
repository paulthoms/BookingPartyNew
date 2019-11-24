
const jwt = require('jsonwebtoken');

export function checkUserNav(role) {
    var result = false;
    jwt.verify(localStorage.getItem('token'), 'secretKey', function (err, authData) {
        if (err) {
            result =  false;
        }
        else {
            if (authData.user.role == role && authData.exp * 1000 > (new Date()).getTime()) {
                result =  true;
            }
            else {
                result = false;
            }
        }
    });

    return result;
}