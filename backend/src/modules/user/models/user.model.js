const mongoose = require("mongoose");

// Utils
const { USER_STATUS } = require("../utils/constants/user.const");

const schema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, trim: true },
  first_name: String,
  last_name: String,
  update_count: { type: Number, default: 0 },
  status: { type: String, enum: Object.values(USER_STATUS) },

  // 1.2. Update mongoose model with missing fields that are present in the database
}, {
  timestamps: true,
});

const user = mongoose.model("User", schema);

module.exports = user;
