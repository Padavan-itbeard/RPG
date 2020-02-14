const route = require("express").Router();
const { Player, Team, Charact, Item } = require("../models/models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

route.post("/", async (req, res) => {
  const { username, password } = req.body;
  const player = await Player.findOne({ login: username })
    .populate("charact")
    .populate("inventory");
  // console.log(username, player);
  if (await bcrypt.compare(password, player.password)) {
    const admin = await Team.findOne({ commander: player._id });
    const players = await Team.findOne({ players: player._id })
      .populate("players")
      .populate("storage");
    if (admin) {
      res.render("admin", { player, players });
    } else {
      res.render("account", { player, players });
    }
  }
});

route.get("/", async (req, res) => {
  const player = await Player.findOne({ _id: req.query.id })
    .populate("players")
    .populate("storage");

  res.render("account", { player });
});

route.post("/char", async (req, res) => {
  const characId = req.body.id;
  const newValue = req.body.value;

  const newCharacter = await Charact.findById(characId).updateOne({
    value: newValue
  });

  res.send({ value: newValue });
});

module.exports = route;
