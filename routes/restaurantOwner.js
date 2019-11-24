

var RestaurantOwnerDAO = require('../models/restaurantOwner').RestaurantOwnerDAO;

function RestaurantOwner(MysqlDB, jwt, CryptoJS) {

    var RestaurantOwnerModel = new RestaurantOwnerDAO(MysqlDB);

    this.getRestaurantOwner = function (req, res, next) {

        RestaurantOwnerModel.getRestaurantOwnerModel(function (results) {
            res.json(results);
        });

    }

    this.getRestaurantOwnerID = function (req, res, next) {

        var id = req.restaurantOwnerID;

        RestaurantOwnerModel.getRestaurantOwnerIDModel(id, function (results) {
            res.json(results);
        })
    }

    this.postRestaurantOwnerNew = function (req, res, next) {

        var ciphertext = CryptoJS.AES.encrypt(req.body.Password, 'secretKey');
        var user = {
            Name: req.body.Name,
            Password: ciphertext.toString(),
            ResID: req.body.ID
        }

        RestaurantOwnerModel.postRestaurantOwnerNewModel(user, function (results) {
            res.json(results);
        });
    }

    this.updateRestaurantOwner = function (req, res, next) {
        var ciphertext = CryptoJS.AES.encrypt(req.body.Password, 'secretKey');
        var user = {
            Name: req.body.Name,
            Password: ciphertext.toString(),
            ID: req.restaurantID
        }

        console.log(user);

        RestaurantOwnerModel.updateRestaurantOwnerModel(user, function (results) {
            res.json(results);
        })

    }

    this.deleteRestaurantOwner = function (req, res, next) {
        var user = {
            ID: req.params.id
        }

        RestaurantOwnerModel.deleteRestaurantOwnerModel(user, function (results) {
            res.json(results);
        });
    }


}

module.exports = RestaurantOwner;