const route = require('express').Router();
const { Player, Team, Charact, Item } = require('../models/models');

const bcrypt = require('bcrypt');
const saltRounds = 10;

route.post('/', async (req, res) => {
  const { username, password } = req.body
  const player = await Player.findOne({ login: username }).populate('charact').populate('inventory');
  console.log(username, player);
  if (await bcrypt.compare(password, player.password)) {
    const admin = await Team.findOne({ commander: player._id });
    if (admin) {
      res.render('admin', { player })
    } else {
      const players = await Team.findOne({ players: player._id }).populate('players').populate('storage');
      res.render('account', { player })
    }
  }
});

module.exports = route;
