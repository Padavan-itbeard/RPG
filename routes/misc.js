const route = require('express').Router();
const { Player, Team, Charact, Item } = require('../models/models');

const bcrypt = require('bcrypt');
const saltRounds = 10;


function protectedRoute(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/kljlkjk');
  }
  next();
}

route.get('/', (req, res) => {
  res.render('index');
});

route.get('/account', protectedRoute, async (req, res) => {
  const player = await Player.findOne({ _id: req.user._id }).populate('charact').populate('inventory');
  const admin = await Team.findOne({ commander: player._id });
  if (admin) res.redirect('/admin');
  const players = await Team.findOne({players: player._id}).populate('players').populate('storage');
  res.render('account', { player, players })
});

route.post('/registration', async (req, res) => {
  const { username, password } = res.body;
  const player = new Player({
    login: username,
    password: await bcrypt.hash(password, saltRounds),
    charact: [],
    inventory: []
  });
  await player.save();
  res.redirect('/account', { username, password });
});

route.get('/logout', protectedRoute, function (req, res) {
  req.logout();
  res.redirect('/');
});

route.get(
  '/badauth',
  (req, res) => {
    res.render('badauth');
  }
);

module.exports = route;
