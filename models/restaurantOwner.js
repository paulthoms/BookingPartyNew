
function RestaurantOwnerDAO(MysqlDB) {

    this.getRestaurantOwnerModel = function (callback) {
        var sql = "SELECT  RestaurantOwner.Name AS UserName,Restaurant.Name as RestaurantName, RestaurantOwner.ID as ID,if(RestaurantOwner.Restaurant_ID is null,'no','yes') as have_Res FROM RestaurantOwner left join Restaurant on RestaurantOwner.Restaurant_ID = Restaurant.ID";
        MysqlDB.query(sql, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                })
            }
        })
    }

    this.getRestaurantOwnerIDModel = function (id, callback) {
        var sql = "SELECT * FROM RestaurantOwner where ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                })
            }
        })
    }

    this.postRestaurantOwnerNewModel = function (user, callback) {

        var sql = "insert into RestaurantOwner (Name,Password, Restaurant_ID) values (?,?,?)";
        MysqlDB.query(sql, [user.Name, user.Password, user.ResID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        });

    }

    this.updateRestaurantOwnerModel = function (user, callback) {
        var sql = "UPDATE RestaurantOwner SET Name = ?, Password = ? WHERE ID = ?";

        MysqlDB.query(sql, [user.Name, user.Password, user.ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        });

    }

    this.deleteRestaurantOwnerModel = function (user, callback) {
        var sql = "delete from RestaurantOwner where ID = ?";
        MysqlDB.query(sql, user.ID, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {

                var sqlDelRes = 'delete from '

                callback({
                    "status": "ok",
                    "data": results
                });
            }
        })
    }

}

module.exports = {
    RestaurantOwnerDAO: RestaurantOwnerDAO
}