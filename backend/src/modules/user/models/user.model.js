const mongoose = require("mongoose");

// Utils
const { USER_STATUS } = require("../utils/constants/user.const");

const schema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, trim: true },
  first_name: String,
  last_name: String,
  update_count: { type: Number, default: 0 },
  status: { type: String, enum: Object.values(USER_STATUS) },

  gamer_tag: String,
  description: String,
  tagline: String,
  age: Number,
  city: String,
  country: String,
  bio: String,
  platform: String,
  genre: String,
  availability: String,
  play_style: String,
}, {
  timestamps: true,
});

const user = mongoose.model("User", schema);

module.exports = user;
