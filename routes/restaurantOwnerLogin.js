
var LoginRestaurantDAO = require('../models/restaurantOwnerLogin').LoginRestaurantDAO;

function LoginRestaurant(MysqlDB, jwt, CryptoJS) {

    var LoginRestaurantModel = new LoginRestaurantDAO(MysqlDB, jwt, CryptoJS);

    this.postLoginRestaurant = function (req, res, next) {

        var user = {
            Name: req.body.Name,
            Password: req.body.Password
        }

        // console.log(user);

        LoginRestaurantModel.postLoginRestaurantModel(user, function (results) {
            res.json({
                "status": "ok",
                "token": results
            });
        });
    }

}

module.exports = LoginRestaurant;