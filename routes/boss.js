const route = require('express').Router();
const { Player, Team, Charact, Item } = require('../models/models');

const bcrypt = require('bcrypt');
const saltRounds = 10;


route.get('/:id', async (req, res) => {
  const data = await Team.findOne({ commander: req.params.id }).populate('players').populate('storage');
  res.render('boss', { data });
});

route.post('/addCh', async (req, res) => {
  const { nameCh, nameTeam } = req.body;
  const team = await Team.findOne({ name: nameTeam });
  team.players.forEach(async (id, i) => {
    const pl = await Player.findById(id).populate('charact'); //.populate();
    const ch = new Charact({
      name: nameCh,
      value: 0
    });
    if (pl.charact.filter(obj => obj.name === nameCh).length === 0) {
      await ch.save();
      await pl.charact.push(ch._id);
      await pl.save();
    } 
  });
});

module.exports = route;
