

function LoginRestaurantDAO(MysqlDB, jwt, CryptoJS) {

    this.postLoginRestaurantModel = function (user, callback) {
        var sql = "select * from RestaurantOwner where Name = ?";
        MysqlDB.query(sql, user.Name, function (error, result) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                if (result.length === 0) {
                    callback({
                        "status": "error",
                        "code": "401-s1",
                        "error": error
                    })
                }
                else {
                    var bytes = CryptoJS.AES.decrypt(result[0].Password.toString(), 'secretKey');
                    var password = bytes.toString(CryptoJS.enc.Utf8);

                    // console.log("this is password", password);

                    if (user.Password === password) {
                        jwt.sign({ user: result[0] }, 'secretKey', { expiresIn: '1h' }, function (error, token) {
                            if (error) {
                                callback({
                                    "status": "error",
                                    "code": "401-s2"
                                });
                            }
                            else {
                                callback({ token: token, role: result[0].role, Restaurant_ID: result[0].Restaurant_ID });
                            }
                        });
                    }
                    else {
                        callback({
                            "status": "error",
                            "code": "401-s3"
                        });
                    }

                }
            }
        })
    }

}

module.exports = {
    LoginRestaurantDAO: LoginRestaurantDAO
}