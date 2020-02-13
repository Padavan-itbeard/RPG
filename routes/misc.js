const route = require('express').Router();
const { Player, Team, Charact, Item } = require('../models/models');

function protectedRoute(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

route.get('/', (req, res) => {
  res.render('index');
});

route.get('/account', protectedRoute, async (req, res) => {
  const player = await Player.findOne({ _id: req.user._id }).populate('charact').populate('inventory');
  res.render('account', { player})
});

// route.post('/change', protectedRoute, async (req, res) => {
//   const {id, value} = req.body;
//   console.log('>>>>>', id, value);
//   //res.redirect('/account');
//   // const char = await Player.findOne({ _id: req.user._id }).populate('charact');
//   // const inv = await Player.findOne({ _id: req.user._id }).populate('inventory');
//   // , { char, inv })
// });

// route.get('/transfer', protectedRoute, (req, res) => {
//   const { amount, username } = req.query;
//   console.log(amount, username);
//   const toUser = Users.find((user) => {
//     return user.login === username;
//   });
//   if (!toUser) {
//     return res.redirect('/account');
//   }
//   toUser.balance += +amount;
//   req.user.balance -= +amount;
//   console.debug(Users);
//   res.redirect('/account');
// });

route.get(
  '/badauth',
  (req, res) => {
    res.render('badauth');
  }
);

module.exports = route;
