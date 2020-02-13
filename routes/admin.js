const route = require('express').Router();
const passport = require('passport');
const { Player, Team, Charact, Item } = require('../models/models');

route.get('/admin', async (req, res) => {
    const player = await Player.findOne({ _id: req.user._id }).populate('charact').populate('inventory');
    res.render('admin', { player})
  })
  
module.exports = route;
