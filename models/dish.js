

function DishDAO(MysqlDB) {

    this.getDishRestaurantIDModel = function (id, callback) {
        var sql = "select * from Dish where Restaurant_ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
            if (error) {
                console.log(results);
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        })
    }

    this.getDishRestaurantIDAndDishIDModel = function (idRestaurant, idDish, callback) {
        var sql = "SELECT * FROM mydb.Dish join Restaurant on Dish.Restaurant_ID = Restaurant.ID where Dish.ID = ? and Restaurant.ID = ?";
        MysqlDB.query(sql, [idDish, idRestaurant], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        })
    }

    this.postDishRestaurantIDAndDishIDModel = function (dish, user, callback) {

        var sql = "insert into Dish (Name,Image,Description,Cost,Restaurant_ID) values (?,?,?,?,?)";
        MysqlDB.query(sql, [dish.Name, dish.Image, dish.Description, dish.Cost, user.user.Restaurant_ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        })
    }

    this.updateDishRestaurantIDAndDishIDModel = function (dish, user, callback) {

        var sql = "UPDATE Dish SET Name = ?, Image = ?, Description = ?, Restaurant_ID = ? WHERE ID = ?";
        MysqlDB.query(sql, [dish.Name, dish.Image, dish.Description, user.user.Restaurant_ID, dish.ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        });

    }

    this.deleteDishRestaurantIDAndDishIDModel = function (dish, callback) {
        var sql = "delete from Dish where ID = ?";
        MysqlDB.query(sql, [dish.ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        })
    }

    this.getDishForResAdminByIDModel = function (dish, callback) {
        var sql = "select * from Dish where ID = ?";
        MysqlDB.query(sql, [dish.ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        });
    }

}

module.exports = {
    DishDAO: DishDAO
}