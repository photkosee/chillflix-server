const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, default: "" },
    profile: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
