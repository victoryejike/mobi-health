const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ledgerSchema = new Schema({
     oldBalance: {
          type: Number,
     },
     newBalance: {
          type: Number,
     },
     direction: String,
     entity: String,
     user: {
          type: String
     },
     txRef: {
          type: String
     },
     txCode: {
          type: String
     }
});


module.exports = mongoose.model("ledger", ledgerSchema)
