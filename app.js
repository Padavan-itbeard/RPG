const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const accountRouter = require("./routes/account");
const indexRouter = require("./routes/index");
const bossRouter = require("./routes/boss");

const { Player, Team, Charact, Item } = require("./models/models");

const bcrypt = require("bcrypt");
const saltRounds = 10;
//password: await bcrypt.hash(password, saltRounds)

const app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://AtlasUser:AtlasUser@appjscluster-exfhk.mongodb.net/RVG?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

passport.use(
  new LocalStrategy(function(username, password, done) {
    Player.findOne({ login: username }, async function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!(await bcrypt.compare(password, user.password))) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  Player.findById(id, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "dfhsfhrt hrthtrhrthrth",
    store: new FileStore({}),
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  })
);

app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.set("view engine", "hbs");
app.use(passport.initialize());
app.use(passport.session());

app.use("/account", accountRouter);
app.use("/", indexRouter);
app.use("/boss", bossRouter);
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
