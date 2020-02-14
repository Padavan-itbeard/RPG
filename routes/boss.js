const route = require('express').Router();
const { Player, Team, Charact, Item } = require('../models/models');

const bcrypt = require('bcrypt');
const saltRounds = 10;


route.get('/:id', async (req, res) => {
  const data = await Team.findOne({ commander: req.params.id }).populate('players').populate('storage');
  res.render('boss', { data });
});

route.post('/addCh', async (req, res) => {
 // console.log('\n\n\n\n\n\n\n\n');
  
  const { nameCh, nameTeam } = req.body;
  const team = await Team.findOne({ name: nameTeam });
  team.players.forEach(async (id) => {
    const pl = await Player.findById(id).populate('charact'); //.populate();
    const ch = new Charact({
      name: nameCh,
      value: 0
    });
    //pl.charact.reduce((i, obj) => {(obj[nameCh] !== un7defined) ? 1 : 0 }, 0);
    // console.log(pl.charact);
    // console.log('\n\n\n\n\n\n\n\n');
    // console.log('>>>>>>',pl.charact.filter(obj => obj["Int"])) //((i, obj) => {(obj[nameCh] !== undefined) ? 1 : 0 }, 0));
    
    await ch.save();
    await pl.charact.push(ch._id);
    await pl.save();
  });
});

module.exports = route;
