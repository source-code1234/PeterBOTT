const express = require ("express")
const app = express()

app.get("/", (req,res) => {
  res.send("Im On")
})

app.listen(3000, () => {
console.log("ok")
})
let Discord = require("discord.js")
let client = new Discord.Client()

client.on('ready', () => {
 client.user.setActivity('-help', { type: 'STREAMING', url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" })
})

client.on ("message", message => { 
if (message.content === "-ping") {
  message.channel.send ("pong")
}
if (message.content === "-hi") {
  message.reply ("hello")
}
if (message.content === "-spoiler") {
  message.reply ("||<https://www.youtube.com/watch?v=dQw4w9WgXcQ>||")
}
if (message.content === "-blobchain") {
  message.channel.send ("<a:DancingBlob:842969971797917717> <a:DancingBlob:842969971797917717> <a:DancingBlob:842969971797917717> <a:DancingBlob:842969971797917717> <a:DancingBlob:842969971797917717>")
}
if (message.content === "-nitro") {
  message.channel.send ("https://cdn.discordapp.com/attachments/797177984762642463/836323760356982864/image0-5.png")
}
if (message.content === "-congrats") {
  message.channel.send ("https://tenor.com/view/congrats-leonardo-dicaprio-fireworks-the-great-gatsby-old-sport-gif-14731521")
}
if (message.content === "-help") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Help Menu")
  .setDescription("The prefix is '-'")
  .setColor("#120875")
  .setFooter("")
  message.reply(embed)
}
if (message.content === "-help") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Commands")
  .setDescription("!hi, !spoiler, !ping, !rickroll, !blobchain, !emojispam -nitro")
  .setColor("#120875")
  .setFooter("imagine needing the help menu bruh lol")
  message.reply(embed)
}
if (message.content === "-ping") {  
    message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
if(message.content.startsWith('-hello')) {
let replies = ["never give up", "hi", "shut up", "no", "hey", "never gonna give you up","never gonna let you down", "<a:rickroll:842970291960938546>"]
message.channel.send(replies[Math.floor(Math.random() * replies.length)]) 
}
if(message.content.startsWith('-say')){
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
message.channel.send(whattosay.join(" "))
}
if(message.content.startsWith('-announce')){
 const anntext = message.content.slice("".length).trim().split(/ +/);
anntext.shift().toLowerCase().split(" ")[0]
 let embed = new Discord.MessageEmbed()
 .setDescription(`**${anntext.join(" ")}**`)
 .setColor("#7e0b0b")
 message.channel.send(embed)
}  
if (message.content.startsWith("-kick")) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
  if (message.content.startsWith('-ban')) {
if(message.member.hasPermission("BAN_MEMBERS")) {
 const user = message.mentions.users.first();
 
 if (user) {
 
 const member = message.guild.member(user);

 if (member) {

 member
 .ban({
 reason: 'They were bad!',
 })
 .then(() => {
 // We let the message author know we were able to ban the person
 message.reply("Successfully banned him/her");
 })
 .catch(err => {

 message.reply("I was unable to ban the member");
 
 console.error(err);
 });
 } else {
 
 message.reply("That user isn't in this guild!");
 }
 } else {
 
 message.reply("You didn't mention the user to ban!");
 }
 }
}
if(message.content.startsWith("-purge")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`-purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms lol!")
} 
}
if (message.content === '-avatar') {
 message.reply(message.author.displayAvatarURL());
 }
if (message.content === '-react') {
 message.react("😎");
}
if (message.content === '-rickroll react') {
 message.react("<a:rickroll:842970291960938546>");
}
if(message.content.startsWith("-warn")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Who did you want to warn lol")
 else {
 let embed = new Discord.MessageEmbed()
 .setTitle("Warnings")
 .setDescription(`${victim} got warned by ${message.author}!`)
 .setColor("RANDOM")
 .setFooter(`Warner : ${message.author.username}`)
 .setTimestamp()
 message.channel.send(embed)
 }
}
if (message.content === '-rickroll') {
 message.react("<a:rickroll:842970291960938546>");
}
if (message.content === '-rickroll') {
 message.channel.send("https://tenor.com/view/rick-astley-rick-roll-dancing-dance-moves-gif-14097983");
}
})

client.on('message', async (message) => {
 if(message.author.bot) return;
 if (message.content.startsWith("-poll")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) return message.reply("You used it wrong. Example: `-poll test`")
 message.delete(2000);
 const pollTopic = await message.channel.send(`**${message.author.username}#${message.author.discriminator}** Asks: **${sentence}**`);
 pollTopic.react(`✅`)
 pollTopic.react(`❌`);
 console.log(guild)
 };
})

client.login ("token") 
