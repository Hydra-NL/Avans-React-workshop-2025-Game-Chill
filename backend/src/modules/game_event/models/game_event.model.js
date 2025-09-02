const mongoose = require("mongoose");

const gameEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  platform: String,
  voice: Boolean,
  players: Number,
  main_image_url: String,

  game: {
    title: String,
    description: String,
    tag: String,
  },

  // Mongoose Schema
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
}, {
  timestamps: true,
});

const GameEvent = mongoose.model("GameEvent", gameEventSchema);
module.exports = GameEvent;
