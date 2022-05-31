let express = require("express");
let path = require("path");
let hbs = require("hbs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// const {MongoClient} = require('mongodb');
// const url ='mongodb://localhost:27017';

let app = express();

let cssstaticpath = path.join(__dirname, "./public", "css");
let imgstaticpath = path.join(__dirname, "./Images");
let jsstaticpath = path.join(__dirname, "./scripts");
let jsonstaticpath = path.join(__dirname);

app.use(express.static(cssstaticpath));
app.use(express.static(imgstaticpath));
app.use(express.static(jsstaticpath));
app.use(express.static(jsonstaticpath));

var templatepath = path.join(__dirname, "./template/views");
var partialpath = path.join(__dirname, "./template/partials");
hbs.registerPartials(partialpath);

app.set("view engine", "hbs");
app.set("views", templatepath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/photoGallery", (req, res) => {
  res.render("photoGallery");
});
app.get("/projects", (req, res) => {
  res.render("projects");
});
app.get("/project1", (req, res) => {
  res.render("project1", {
    heading1: "The Simplicity of",
    heading2: "Living",
  });
});
app.get("/project2", (req, res) => {
  res.render("project2", {
    heading1: "The Joy of",
    heading2: "Living",
  });
});
app.get("/project3", (req, res) => {
  res.render("project3", {
    heading1: "The",
    heading2: "Sophisticated Living",
  });
});

app.get("/ourTeam", (req, res) => {
  res.render("ourTeam");
});
app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "shop.html"));
});
app.use("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "products.html"));
});
app.use("/contactUs", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "contactUs.html"));
});
app.use("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "login.html"));
});

// mongodb

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { Int32 } = require("mongodb");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/wp");
var nameSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  telephone: String,
});
var User = mongoose.model("User", nameSchema);

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.sendFile(path.join(__dirname, "html", "confirmed.html"));
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
});

// mongo contactus
var query = new mongoose.Schema({
  qname: String,
  qemail: String,
  qmess: String,
});
var Details = mongoose.model("details", query);

// app.get("/add", (req, res) => {
//   res.sendFile(__dirname + "/login.html");
// });

app.post("/addquery", (req, res) => {
  var myData = new Details(req.body);
  myData
    .save()
    .then((item) => {
      res.sendFile(path.join(__dirname, "html", "confirmed.html"));
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "html", "404error.html"));
});
app.listen("3000", () => {
  console.log("port 3000");
});
