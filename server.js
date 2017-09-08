const express = require("express");
const app = express(); 						// create our app w/ express				// mongoose for mongodb
const port = process.env.PORT || 8080; 				// set the port		// load the database config
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(express.static("./dist")); 		// set the static files location /public/img will be /img for users
app.use(morgan("dev")); // log every request to the console
app.use(bodyParser.urlencoded({"extended": "true"})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: "application/vnd.api+json"})); // parse application/vnd.api+json as json
app.use(methodOverride("X-HTTP-Method-Override")); // override with the X-HTTP-Method-Override header in the request


 // application -------------------------------------------------------------
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(port);

console.log("App listening on port " + port);