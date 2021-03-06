const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const path = require('path');
//Import routes
const Users = require("./Routes/api/users");
const Items = require("./Routes/api/items");
const Category = require("./Routes/api/category");
const Review = require("./Routes/api/review");
const Cart = require("./Routes/api/cart");
const Purchase = require("./Routes/api/purchased");
const PackageNames = require('./Routes/api/packageName');
const Companies = require('./Routes/api/companies');
const ContactUs = require('./Routes/api/contactUs');
const WishList = require('./Routes/api/wishlist');
//middlewear
const app = express();

//body parser middlewwear
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  res.json({
    message: "Welcome to the API"
  });
});

//get the mongodb url
const db = require("./config/keys").mongoURI;

//Connet to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("Mongo DB Connected."))
  .catch(err => console.log(err));

app.use("/api/users", Users);
app.use("/api/items", Items);
app.use("/api/category", Category);
app.use("/api/review", Review);
app.use("/api/cart", Cart);
app.use("/api/pruchase", Purchase);
app.use("/api/packages", PackageNames);
app.use("/api/companies", Companies);
app.use("/api/contactus", ContactUs);
app.use("/api/wishlist", WishList);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname, 'client/build','index.html'));
});


const PORT = process.env.PORT || 5000;
// app.set("port" , process.env.PORT || 3000);
// const port = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
