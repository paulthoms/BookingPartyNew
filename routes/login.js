
var LoginDAO = require('../models/login').LoginDAO;

function Login(MysqlDB, jwt, CryptoJS) {

    var LoginModel = new LoginDAO(MysqlDB, jwt, CryptoJS);

    this.postLogin = function (req, res, next) {

        var user = req.body;
        console.log(req.body);
        LoginModel.postLogin(user, function (result) {
            res.json({
                "status":"ok",
                token: result
            });
        });

    }

}


module.exports = Login;