const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "HusooTV - ready.js �zerinden de�i�tir",
        "sat�r 1",
        "sat�r 2",
        "sat�r 3",
        "sat�r 4",
        "sat�r 5",
       //DBL EKLENCEKSEN�Z 5000 EN �Y� DE����M S�RES�D�R! EKLEMEK �STEM�YORSANIZ �DEAL 2500

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.youtube.com/channel/UC5mxQbR-4er2giWDTq9SgQg?view_as=subscriber" );
      }, 2 * 5000); //DE���ME S�RES�

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar y�klendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giri� yap�ld�!`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yard�m + ${client.guilds.size} sunucu + ${client.users.size} kullan�c�`);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarland�!`);
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: �u an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullan�c�ya hizmet veriliyor!`);
};
