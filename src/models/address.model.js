const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
     address: String,
     location: {
     type: {
          type: String, 
          enum: ['Point'], 
          required: true
     },
     coordinates: {
          type: [Number],
          required: true
     }
     }
});


module.exports = mongoose.model("address", addressSchema)
