const route = require("express").Router();

const { Player, Team, Charact, Item } = require("../models/models");

route.get("/", async (req, res) => {
  const teams = await Team.find().populate("name");
  console.log(teams);

  res.render("index", { teams });
});

module.exports = route;
