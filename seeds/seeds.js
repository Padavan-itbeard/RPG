const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://AtlasUser:AtlasUser@appjscluster-exfhk.mongodb.net/RVG?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

// Сбрасываем базу
mongoose.connection.dropDatabase();
// Берем модели базы данных из models
const { Player, Team, Charact, Item } = require("../models/models");
// Засеиваем базу начальными данными
(async () => {
  //---------------------------------------------------------------
  // У каждой вещи, характеристики и игрока уникальный id
  //---------------------------------------------------------------
  const item1 = new Item({
    name: "Sword",
    weight: "2"
  });
  await item1.save();

  const item2 = new Item({
    name: "hammer",
    weight: "4"
  });
  await item2.save();

  const item3 = new Item({
    name: "Knife",
    weight: "1"
  });
  await item3.save();

  const charact1 = new Charact({
    name: "Int",
    value: "0"
  });
  await charact1.save();

  const charact2 = new Charact({
    name: "Morale",
    value: "0"
  });
  await charact2.save();

  const charact3 = new Charact({
    name: "Armour",
    value: "0"
  });
  await charact3.save();

  const player1 = new Player({
    login: "Dima",
    password: "$2b$10$GiAE1fOPu9EZyqVAKn3aOu/RC6m3eqxu/SwgF3v/91uvEenRTaSpq",
    charact: [charact1, charact2, charact3],
    inventory: [item1, item2, item3]
  });
  await player1.save();
  //---------------------------------------------------------------
  // У каждой вещи, характеристики и игрока уникальный id
  //---------------------------------------------------------------
  const charact22 = new Charact({
    name: "Int",
    value: "0"
  });
  await charact22.save();

  const charact23 = new Charact({
    name: "Morale",
    value: "0"
  });
  await charact23.save();

  const charact24 = new Charact({
    name: "Armour",
    value: "0"
  });
  await charact24.save();

  const item21 = new Item({
    name: "Sword",
    weight: "2"
  });
  await item21.save();

  const item22 = new Item({
    name: "hammer",
    weight: "4"
  });
  await item22.save();

  const item23 = new Item({
    name: "Knife",
    weight: "1"
  });
  await item23.save();

  const player2 = new Player({
    login: "Igor",
    password: "$2b$10$VB8URVyRnNweSxoO0iAi0.maksRdD5r7invHOOeoPqwGJxa7Mpitu",
    charact: [charact22, charact23, charact24],
    inventory: [item21, item22, item23]
  });
  await player2.save();
  //---------------------------------------------------------------
  // У каждой вещи, характеристики и игрока уникальный id
  //---------------------------------------------------------------
  const item31 = new Item({
    name: "Sword",
    weight: "2"
  });
  await item31.save();

  const item32 = new Item({
    name: "hammer",
    weight: "4"
  });
  await item32.save();

  const item33 = new Item({
    name: "Knife",
    weight: "1"
  });
  await item33.save();

  const charact31 = new Charact({
    name: "Int",
    value: "30"
  });
  await charact31.save();

  const charact32 = new Charact({
    name: "Morale",
    value: "10"
  });
  await charact32.save();

  const charact33 = new Charact({
    name: "Armour",
    value: "20"
  });
  await charact33.save();

  const player3 = new Player({
    login: "Goga",
    password: "$2b$10$sxZlpXB2MVhX70vM6t2D2ObRXDv/zDn28orSM60qD4YdTOhzl75DW",
    charact: [charact31, charact33, charact32],
    inventory: [item31, item32, item33]
  });
  await player3.save();
  //----------------------------------
  // У каждой вещи, характеристики и игрока уникальный id
  //----------------------------------
  const items1 = new Item({
    name: "Sword",
    weight: "2"
  });
  await items1.save();

  const items2 = new Item({
    name: "hammer",
    weight: "4"
  });
  await items2.save();

  const items3 = new Item({
    name: "Knife",
    weight: "1"
  });
  await items3.save();

  const team = new Team({
    name: "Wins",
    commander: player2,
    players: [player2, player1, player3],
    storage: [items1, items2, items3]
  });
  await team.save();
  // Закрываем базу
  await mongoose.connection.close();
})();
