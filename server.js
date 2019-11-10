const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = express.Router();
const PORT = 4000;

let Restaurant = require("./models/restaurant-model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/restaurants", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

routes.get("/", (req, res) => {
  Restaurant.find((err, restaurants) => {
    if (err) {
      console.log(err);
      res.status(404).send("Restaurant list not found!");
    } else {
      res.json(restaurants);
    }
  });
});

routes.get("/search", (req, res) => {
  // for (key in req.query) console.log(`Query: ${req.query[key]}`);
  const query = {
    city: req.query.city,
    price: req.query.price
  };

  Restaurant.find(
    { city: query.city, price: query.price },
    (err, restaurant) => {
      if (err) {
        console.log(err);
        res.status(404).send("Sorry, restaurant was not found");
      } else {
        res.json(restaurant);
      }
    }
  );
});

routes.post("/add", (req, res) => {
  let restaurant = new Restaurant(req.body);
  restaurant
    .save()
    .then(restaurant => {
      res.status(200).json({ restaurant: "restaurant added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new restaurant failed");
    });
});

routes.get("/:id", (req, res) => {
  let id = req.params.id;
  Restaurant.findById(id, (err, restaurant) => {
    if (err) {
      console.log(err);
      res.status(400).send("could not find restaurant");
    }
    res.json(restaurant);
  });
});

routes.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Restaurant.findByIdAndRemove(id, err => {
    if (err) return next(err);
    res.send("Deleted successfully");
  });
});

app.use("/restaurants", routes);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
