

var RestaurantDAO = require('../models/restaurant').RestaurantDAO;


function Restaurant(MysqlDB, jwt, CryptoJS) {
    var RestaurantModel = new RestaurantDAO(MysqlDB);

    this.getRestaurant = function (req, res, next) {
        RestaurantModel.getRestaurantModel(function (result) {
            res.json(result);
        });
    }

    this.getRestaurantID = function (req, res, next) {
        var id = req.params.id;
        RestaurantModel.getRestaurantIDModel(id, function (result) {
            res.json(result);
        });
    }

    this.postRestaurant = function (req, res, next) {

        const file = req.files.Image;
        const tmpdir = __dirname.substring(0, __dirname.length - 7);
        console.log(file);
        var Img = file.name.split('.');
        var nameImg = (new Date()).getTime().toString() + "." + Img[Img.length - 1];
        console.log(nameImg);
        file.mv(`${tmpdir}/frontend/public/uploads/${nameImg}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            else {
                var restaurant = {
                    Name: req.body.Name,
                    Type: req.body.Type,
                    Address: req.body.Address,
                    Image: nameImg,
                    Position: req.body.Position
                }

                console.log(restaurant.Position);

                RestaurantModel.postRestaurantModel(restaurant, function (result) {
                    res.json(result);
                });
            }

        })

    }

    this.updateRestaurant = function (req, res, next) {

        const file = req.files.Image;
        const tmpdir = __dirname.substring(0, __dirname.length - 7);
        console.log("this is file", file);
        var Img = file.name.split('.');
        var nameImg = (new Date()).getTime().toString() + "." + Img[Img.length - 1];
        console.log(nameImg);
        file.mv(`${tmpdir}/frontend/public/uploads/${nameImg}`, (err) => {
            if (err) {
                res.json({
                    status: "error",
                    code: "500",
                    error: err
                });
            }
            else {
                var restaurant = {
                    Name: req.body.Name,
                    Type: req.body.Type,
                    Address: req.body.Address,
                    Image: nameImg,
                    Position: req.body.Position
                };

                var id = req.restaurantID
                console.log(id);

                console.log(restaurant);

                if (req.body.Name == "undefined" || req.body.Type == "undefined" || req.body.Address == "undefined" || nameImg === null) {
                    restaurant.Name = null;
                } else {
                    RestaurantModel.updateRestaurantModel(id, restaurant, function (result) {
                        res.json(result);
                    })
                }

            }

        })

    }

    this.deleteRestaurant = function (req, res, next) {
        var id = req.params.id;

        RestaurantModel.deleteRestaurantModel(id, function (result) {
            res.json(result);
        });

    }

}

module.exports = Restaurant;