const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botunuz ${client.user.tag} artık aktif halde!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'botun cevap vermesi için yazılan kelime') {
    msg.reply('botun vermesini istediğiniz yanıt!');
  }
  if (msg.content.toLowerCase() === 'instagram') {
    msg.reply('@samet2gether');
  }
});

client.login('Nzk1MTUxOTQ4ODk4NTAwNjA5.X_FM9Q.zP9GhwdM_F2yec7x7hj0azc4dz8');
