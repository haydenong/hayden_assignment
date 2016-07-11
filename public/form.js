/**
 * Created by nimo on 11/7/16.
 */
(function () {
    var formApp = angular.module("formApp", ['angularjs-datetime-picker']);
    var formAppController = function ($http, $window) {
        var ctrl = this;
        ctrl.contactPattern = /^[0-9]{8}$/;


        ctrl.eighteen = function () {
            var today = new Date();
            var minAge = 18;
            var minDob = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
            var birthdayString = ctrl.dob.split("/");
            var birthday = new Date(birthdayString[2], (birthdayString[1] - 1), birthdayString[0]);
            if (birthday > minDob) {
                console.info(minDob);
                console.info(birthday);
                console.info("More");
                alert("You must be above 18!")
            } else {
                console.info(minDob);
                console.info(birthday);
                console.info("Less");

            }
        };

        ctrl.status = {
            message: "",
            code: 0
        };
        
        ctrl.submit = function () {
            $http.get("/register", {
                params: {
                    name: ctrl.name,
                    contact: ctrl.contact,
                    email: ctrl.email,
                    dob: ctrl.dob,
                    gender: ctrl.gender,
                    address: ctrl.address,
                    country: ctrl.country,
                    contact: ctrl.contact
                }
            }).then(function () {
                console.info("Success");
                ctrl.status.code = 202;
                $window.location = '/thankyou';
            }).catch(function () {
                console.info("Error");
                ctrl.status.message = "Your registration failed";
                ctrl.status.code = 400;
            })
        };


    }
    formApp.controller("formAppController", ["$http", "$window", formAppController]);
})();