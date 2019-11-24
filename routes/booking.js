

var BookingDAO = require('../models/booking').BookingDAO;
var ConfirmMail = require('../routes/ConFirmMail');

function Booking(MysqlDB, jwt, CryptoJS) {

    var BookingModel = new BookingDAO(MysqlDB);

    this.getBooking = function (req, res, next) {
        BookingModel.getBookingModel(function (result) {
            res.json(result);
        });
    }

    this.getBookingUser = function (req, res, next) {
        BookingModel.getBookingUserModel(req.user.user.ID, function (result) {
            res.json(result);
        });
    }

    this.getBookingUserAndID = function (req, res, next) {

        var ID = req.params.id;

        console.log(ID);

        BookingModel.getBookingUserAndIDModel(req.user.user.ID, ID, function (result) {
            res.json(result);
        });
    }

    this.postBooking = function (req, res, next) {
        // console.log(req.user.user.ID);
        var Booking = {
            Time: req.body.Time,
            Member: req.body.Member,
            User_ID: req.user.user.ID,
            Restaurant_ID: req.body.Restaurant_ID,
            Description: req.body.Description
        }
        console.log(Booking);
        BookingModel.postBookingModel(Booking, function (result) {
            res.json(result);
        });
    }

    this.updateBooking = function (req, res, next) {
        console.log(req.user);
        var Booking = {
            Time: req.body.Time,
            Member: req.body.Member,
            User_ID: req.user.user.ID,
            Restaurant_ID: req.body.Restaurant_ID,
            ID: req.body.ID
        }

        BookingModel.updateBookingModel(Booking, function (result) {
            res.json(result);
        })
    }

    this.deleteBooking = function (req, res, next) {
        var Booking = {
            User_ID: req.restaurantOwnerID,
            Restaurant_ID: req.restaurantID,
            ID: req.body.ID
        }

        BookingModel.deleteBookingModel(Booking, function (result) {
            res.json(result);
        });

    }


    this.getBookingRestaurant = function (req, res, next) {
        var Booking = {
            ID: req.restaurantOwnerID,
            restaurantID: req.restaurantID
        }
        console.log(Booking.ID, Booking.restaurantID)
        BookingModel.getBookingRestaurantModel(Booking, function (result) {
            res.json(result);
        })
    }

    this.postConfirmStatus = function (req, res, next) {
        var Booking = {
            restaurantID: req.restaurantID,
            ID: req.body.ID,
            Email: req.body.Email
        }



        BookingModel.postConfirmStatusModel(Booking, function (result) {
            ConfirmMail(Booking.Email, "confirm booking", "we confirm your request in my restaurant! Thank You for booking!");
            res.json(result);
        })
    }

    this.postSendFeedback = function (req, res, next) {
        var feedback = req.body.Feedback;
        console.log(feedback);
        try {
            ConfirmMail("avaichuong@gmail.com", "feedback customer", feedback);
            res.json({
                status: "ok"
            });
        }
        catch (e) {
            res.json({
                status: "error"
            });
        }
    }


}

module.exports = Booking;