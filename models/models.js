const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  login: String,
  password: String,
  charact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Charact' }],
  inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

const teamSchema = new mongoose.Schema({
  name: String,
  commander: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  storage: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

const charactSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const itemSchema = new mongoose.Schema({
  name: String,
  weight: Number,
});

module.exports = {
  Player: mongoose.model('Player', playerSchema),
  Team: mongoose.model('Team', teamSchema),
  Charact: mongoose.model('Charact', charactSchema),
  Item: mongoose.model('Item', itemSchema),
}





