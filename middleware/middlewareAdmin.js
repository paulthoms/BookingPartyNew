
function MiddlewareAdmin(jwt) {
    this.checkTokenAdmin = function (req, res, next) {
        jwt.verify(req.token, 'secretKey', function (err, authData) {
            if (err) {
                res.sendStatus(403);
            }
            else {
                console.log(authData);
                if (authData.user.role === 0) {
                    next();
                }
                else {
                    res.json({
                        "status": "error",
                        "code": "403 not admin"
                    });
                }
            }
        });
    }

    this.checkTokenAdminGet = function (req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== undefined) {
            //split at the space

            const bearer = bearerHeader.split(' ');

            const bearerToken = bearer[1];

            req.token = bearerToken;

            jwt.verify(bearerToken, 'secretKey', function (err, authData) {
                if (err) {
                    res.sendStatus(403);
                }
                else {
                    console.log(authData);
                    if (authData.user.Name === "admin") {
                        next();
                    }
                    else {
                        res.json({
                            "status": "error",
                            "code": "403"
                        });
                    }
                }
            });

        }
        else {
            // send 403
            res.sendStatus(403);
        }
        // jwt.verify(req.token, 'secretKey', function (err, authData) {
        //     if (err) {
        //         res.sendStatus(403);
        //     }
        //     else {
        //         console.log(authData);
        //         if (authData.user.Name === "admin") {
        //             next();
        //         }
        //         else {
        //             res.json({
        //                 "status": "error",
        //                 "code": "403"
        //             });
        //         }
        //     }
        // });
    }

}

module.exports = MiddlewareAdmin