
var UserDAO = require('../models/user').UserDAO;
var sendMail = require('./sendMail');


function User(MysqlDB, jwt, CryptoJS) {

    var UserModel = new UserDAO(MysqlDB, jwt, CryptoJS);

    this.getUser = function (req, res, next) {
        UserModel.getUserModel(function (result) {
            res.send(result);
        });
        console.log(req.token);
        // res.send("khong co gi quy hon doc lap tu do");
    }

    this.getUserName = function (req, res, next) {


        var userid = req.params.id;

        jwt.verify(req.token, 'secretKey', function (err, authData) {
            if (err) {
                res.sendStatus(403);
            }
            else {
                console.log(authData.user.Name);
                UserModel.getUserNameModel(authData.user.Name, function (result) {
                    res.send(result);
                });
            }
        });
    }

    this.postUser = function (req, res, next) {
        var ciphertext = CryptoJS.AES.encrypt(req.body.Password, 'secretKey');
        console.log(ciphertext.toString());
        var user = {
            Name: req.body.Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Image: req.body.Image,
            Password: ciphertext.toString()
        }
        jwt.sign({ user: user }, 'secretKey', { expiresIn: '1h' }, function (error, token) {
            sendMail(user.Email, token);
        });

        UserModel.postUserModel(user, function (result) {
            res.send(result);
        });
    }

    this.updateUser = function (req, res, next) {
        var ciphertext = CryptoJS.AES.encrypt(req.body.Password, 'secretKey');
        var user = {
            Name: req.body.Name,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Image: req.body.Image,
            Password: ciphertext.toString(),
            ID: req.user.user.ID
        }
        console.log("update function",req.user);



        UserModel.updateUserModel(user, function (result) {
            res.send(result);
        });

    }

    this.deleteUser = function (req, res, next) {
        var userid = req.params.id;
        UserModel.deleteUserModel(userid, function (result) {
            res.send(result);
        });
    }

    this.CheckMail = function (req, res, next) {
        console.log("this is router check mail with token: ", req.params.token);
        jwt.verify(req.params.token, 'secretKey', function (err, authData) {
            if (err) {
                res.sendStatus(403);
            }
            else {
                console.log(authData);
                UserModel.checkEmail(authData, function (result) {
                    res.send(result);
                });
            }
        });
        // res.send("checked email");
    }

}

module.exports = User;