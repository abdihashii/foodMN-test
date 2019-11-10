const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Restaurant = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  city: {
    type: String
  },
  price: {
    type: String
  }
});

module.exports = mongoose.model("Restaurant", Restaurant);
