
var DishDAO = require('../models/dish').DishDAO;

function Dish(MysqlDB, jwt, CryptoJS) {

    var DishModel = new DishDAO(MysqlDB);

    this.getDishRestaurantID = function (req, res, next) {
        var id = req.params.restaurantID;
        DishModel.getDishRestaurantIDModel(id, function (result) {
            res.json(result);
        });
    }

    this.getDishRestaurantIDAndDishID = function (req, res, next) {

        var idRes = req.params.restaurantID;
        var idDish = req.params.dishID;
        DishModel.getDishRestaurantIDAndDishIDModel(idRes, idDish, function (result) {
            res.json(result);
        });
    }

    this.postDishRestaurantIDAndDishID = function (req, res, next) {

        console.log(req.body);

        const file = req.files.Image;
        const tmpdir = __dirname.substring(0, __dirname.length - 7);
        // console.log(file.name.split('.')[]);
        var Img = file.name.split('.');
        var nameImg = (new Date()).getTime().toString() + "." + Img[Img.length - 1];
        console.log(nameImg);
        file.mv(`${tmpdir}/frontend/public/uploads/${nameImg}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            else {
                var dish = {
                    Name: req.body.Name,
                    Image: nameImg,
                    // Image: req.body.Image,
                    Description: req.body.Description,
                    Cost: req.body.Cost
                }

                console.log(dish);

                DishModel.postDishRestaurantIDAndDishIDModel(dish, req.user, function (result) {
                    res.json(result);
                });
            }

        })

    }

    this.updateDishRestaurantIDAndDishID = function (req, res, next) {

        const file = req.files.Image;
        const tmpdir = __dirname.substring(0, __dirname.length - 7);
        // console.log(file.name.split('.')[]);
        var Img = file.name.split('.');
        var nameImg = (new Date()).getTime().toString() + "." + Img[Img.length - 1];
        console.log(nameImg);
        file.mv(`${tmpdir}/frontend/public/uploads/${nameImg}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            else {
                var dish = {
                    Name: req.body.Name,
                    Image: nameImg,
                    Description: req.body.Description,
                    ID: req.params.id
                }

                console.log(dish);

                DishModel.updateDishRestaurantIDAndDishIDModel(dish, req.user, function (result) {
                    res.json(result);
                })
            }

        })

    }

    this.deleteDishRestaurantIDAndDishID = function (req, res, next) {
        var dish = {
            ID: req.params.id
        }

        DishModel.deleteDishRestaurantIDAndDishIDModel(dish, function (result) {
            res.json(result);
        })

    }

    this.getDishForResAdminByID = function (req, res, next) {
        var dish = {
            ID: req.params.id
        }
        console.log(dish);

        DishModel.getDishForResAdminByIDModel(dish, function (result) {
            res.json(result);
        });

    }

}


module.exports = Dish;