// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables and Reservations (DATA)
// =============================================================
var tables = [

];

var reservations = [

  ];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

  // Displays all tables and reservations
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

//Create New Reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newtable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
  console.log(newtable);

  if (tables.length < 5) {
    tables.push(newtable);
 } else
    reservations.push(newtable);

  res.json(newtable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });






