/**
 * Created by nimo on 11/7/16.
 */
var express = require("express");
var app = express();
var public = __dirname + "/public";

app.use(express.static(public));
app.use(express.static(__dirname + "/bower_components"));

app.get("/thankyou", function (req, res) {
    res.redirect("thankyou.html");
});

app.get("/register", function (req, res) {
    var name = req.query.name;
    var contact = req.query.contact;
    var email = req.query.email;
    var dob = req.query.dob;
    var gender = req.query.gender;
    var address = req.query.address;
    var country = req.query.country;
    console.info(req.query);
    res.status(202).end();

});

app.use(function (req, res) {
    console.info("FILE NOT FOUND IN PUBLIC: %s", req.originalUrl);
    res.redirect("/error.html");
});

var port = process.argv[2] || 3000;
app.set("port", port);
app.listen(app.get("port"), function () {
    console.info("Web server started on port %d", app.get("port"));
});
