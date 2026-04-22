const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");


// set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs", ejsMate);// enable layouts
app.use(express.static(path.join(__dirname, "/public")));


app.get("/", (req,res) => {
    res.send("Hi, This is root server");
});

// Main Routes
app.get("/main", (req,res) => {
    res.render("pages/index.ejs");
});

app.listen(8080, () => {
    console.log("server is running at 8080")
})