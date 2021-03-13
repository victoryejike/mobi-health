const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
     doctor: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'users'
        },
     patient: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'users'
     },
     date: {
          type: Date,
          default: Date.now
     },
     duration: {
          type: Number
     },
     meetingLink: {
          type: String
     },
     symptoms : {
          type: Array,
          default: []
     },
     status : {
          type: String,
          enum : ['PENDING','DECLINED', 'CANCELLED', 'ACTIVE', 'SUCCESSFUL'],
          default: 'PENDING'
     },
     recording : {
          type: String
     },
     type : {
          type: String,
          enum: ['CONSULTATION', 'APPOINTMENT'],
          required: true
     }
});


module.exports = mongoose.model("appointment", appointmentSchema)
