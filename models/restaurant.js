

function RestaurantDAO(MysqlDB) {

    this.getRestaurantModel = function (callback) {
        var sql = "select * from Restaurant";
        MysqlDB.query(sql, function (error, results) {
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
                })
            }
        });
    }

    this.getRestaurantIDModel = function (id, callback) {
        var sql = "select * from Restaurant where ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400"
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                })
            }
        });
    }

    this.postRestaurantModel = function (restaurant, callback) {
        console.log(restaurant);
        var sql = "insert into Restaurant (Name, Type, Address, Image,PositionMap) values (?,?,?,?,?)";
        MysqlDB.query(sql, [restaurant.Name, restaurant.Type, restaurant.Address, restaurant.Image, restaurant.Position], function (error, results) {
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
                });
            }
        });
    }

    this.updateRestaurantModel = function (id, restaurant, callback) {
        var sql = "UPDATE Restaurant SET Name = ?, Type = ?, Address = ?, Image = ?, PositionMap = ? WHERE ID = ?";
        MysqlDB.query(sql, [restaurant.Name, restaurant.Type, restaurant.Address, restaurant.Image, restaurant.Position, id], function (error, results) {
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
                });
            }
        });
    }

    this.deleteRestaurantModel = function (id, callback) {
        var sql = "delete from Restaurant where ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
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
                });
            }
        });
    }

}

module.exports = {
    RestaurantDAO: RestaurantDAO
}