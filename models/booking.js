
function BookingDAO(MysqlDB) {

    this.getBookingModel = function (callback) {
        var sql = "SELECT * FROM Booking inner join Users;";
        MysqlDB.query(sql, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400"
                });
            }
            else {
                callback(results);
            }
        });
    }

    this.getBookingUserModel = function (id, callback) {
        var sql = "SELECT Booking.ID as ID,Restaurant.ID as ID_Res,Booking.Time,Booking.Member,Restaurant.Name as Res_name,Restaurant.Address as Res_address,Booking.Status FROM  Booking JOIN Restaurant ON Booking.Restaurant_ID = Restaurant.ID where Booking.Users_ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback(results);
            }
        });
    }


    this.getBookingUserAndIDModel = function (idUser, id, callback) {
        var sql = "SELECT Booking.ID as ID,Restaurant.ID as ID_Res,Booking.Time,Booking.Member,Restaurant.Name as Res_name,Restaurant.Address as Res_address,Booking.Status FROM  Booking JOIN Restaurant ON Booking.Restaurant_ID = Restaurant.ID where Booking.ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
            console.log(id)
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback(results);
            }
        });
    }

    this.postBookingModel = function (Booking, callback) {
        var sql = "insert into Booking (Time, Member, Users_ID, Restaurant_ID,Description) values (?,?,?,?,?)";

        MysqlDB.query(sql, [Booking.Time, Booking.Member, Booking.User_ID, Booking.Restaurant_ID, Booking.Description], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok"
                });
            }
        });

    }

    this.updateBookingModel = function (Booking, callback) {
        var sql = "UPDATE Booking SET Time = ?, Member = ?, Users_ID = ?,Restaurant_ID = ? WHERE ID = ?";
        MysqlDB.query(sql, [Booking.Time, Booking.Member, Booking.User_ID, Booking.Restaurant_ID, Booking.ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status": "ok"
                });
            }
        });
    }

    this.deleteBookingModel = function (Booking, callback) {
        var sql = "delete from Booking where ID = ?";

        MysqlDB.query(sql, [Booking.ID], function (error, result) {
            if (error) {
                callback({
                    "status": "error",
                    "Code": "400"
                });
            }
            else {
                callback({
                    "status": "ok"
                })
            }
        });

    }

    this.getBookingRestaurantModel = function (Booking, callback) {
        var sql = 'SELECT Booking.ID,Booking.Time, Booking.Status, Booking.Member,Users.Email, Users.Name,Users.Phone,Booking.Description FROM mydb.Booking inner join Users on Booking.Users_ID = Users.ID where Booking.Restaurant_ID = ?';
        MysqlDB.query(sql, Booking.restaurantID, function (error, result) {
            if (error) {
                callback({
                    "status": "error",
                    "Code": "400"
                });
            }
            else {
                callback({
                    "status": "ok",
                    "data": result
                })
            }
        })
    }

    this.postConfirmStatusModel = function (Booking, callback) {
        var sql = 'UPDATE Booking SET Status = ? WHERE ID = ? and Booking.Restaurant_ID = ?';
        MysqlDB.query(sql, [1, Booking.ID, Booking.restaurantID], function (error, result) {
            if (error) {
                callback({
                    "status": "error",
                    "Code": "400"
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": result
                })
            }
        })
    }

}

module.exports = {
    BookingDAO: BookingDAO
}