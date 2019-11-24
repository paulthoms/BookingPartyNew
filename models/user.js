
function UserDAO(MysqlDB) {

    this.getUserModel = function (callback) {
        var sql = "select * from Users";
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

    this.getUserNameModel = function (username, callback) {
        var sql = "select * from Users where Name = ?";
        MysqlDB.query(sql, username, function (error, results) {
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

    this.postUserModel = function (user, callback) {
        var sql = "insert into Users (Name, Email, Phone, Image, Password) values (?,?,?,?,?)";
        MysqlDB.query(sql, [user.Name, user.Email, user.Phone, user.Image, user.Password], function (error, results) {
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


    this.updateUserModel = function (user, callback) {
        var sql = "UPDATE Users SET Name = ?, Email = ?, Phone = ?,Image = ?,Password = ? WHERE ID = ?";
        MysqlDB.query(sql, [user.Name, user.Email, user.Phone, user.Image, user.Password, user.ID], function (error, results) {
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

    this.deleteUserModel = function (userid, callback) {
        var sql = "delete from Users where ID = ?";
        MysqlDB.query(sql, userid, function (error, results) {
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

    this.checkEmail = function (user, callback) {
        var sql = "select * from Users where Email = ?";
        MysqlDB.query(sql, user.user.Email, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400"
                })
            }
            else {
                if (results.length === 0) {
                    callback({
                        "status": "error",
                        "code": "400 not found user"
                    });
                }
                else {
                    var sql = "UPDATE Users SET checkMail = ? WHERE Email = ?";
                    MysqlDB.query(sql, [1,user.user.Email], function (error, results) {
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
        });

    }


}


module.exports = {
    UserDAO: UserDAO
}
