const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { BCRYPT_SALT } = require("./../config")
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    profile: {
      firstname: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
      },
      lastname: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
      },
      email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Email is required"],
      },
      phoneNumber:{
        type: Number
      },
      password: {
        type: String,
      },
      image: {
        type: String,
      },
    },
    balance:{
      type: Number
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    deviceId:{
      type: String
    },
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next()

  const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
  this.password = hash;

  next();
});



module.exports = mongoose.model('users', userSchema)