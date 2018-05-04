var Eris = require('eris');
var bot = new Eris("NDQxNTc2NzU2NzA5Njg3MzA3.DczZYg.K-Y9R2Ob3w75vkIZZKOq3DD1rEg");

bot.on("ready", () =>{
	console.log("Conectado!");
});
 
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Ola") == 0){
	 bot.createMessage(msg.channel.id, msg.author.mention+" Oi Anjo");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Bom dia") == 0){
	 bot.createMessage(msg.channel.id, msg.author.mention+" Bommmmmm Dia Anjo!");
 }
 });
 
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Ana cecilia") == 0){
	 bot.createMessage(msg.channel.id, "É o amor da vida do DANi");
 }
 });
 
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Biel") == 0){
	 bot.createMessage(msg.channel.id, "Gabriel Rapaz Bonito");
 }
 });
 
  bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Let") == 0){
	 bot.createMessage(msg.channel.id, "Pequena de tamanho, mas o popotão é grandão");
 }
 });
 
  bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Link do servidor?") == 0){
	 bot.createMessage(msg.channel.id, "Voce pode pegar em #convite");
 }
 });
  bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Ellen") == 0){
	 bot.createMessage(msg.channel.id, "É a perfeita Best do DANi");
 }
 });
 
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Pac Man") == 0){
	 bot.createMessage(msg.channel.id, "Esse ta comendo mais que o próprio Come Come.");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Guuh") == 0){
	 bot.createMessage(msg.channel.id, "Escravo Passivo.");
 }
 });
 
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Hey siri") == 0){
	 bot.createMessage(msg.channel.id, "Siri teu cu, aquela safada nao tem opinião própria.");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Moreninho") == 0){
	 bot.createMessage(msg.channel.id, "Esse fala portugues fluente de Pernambuco. Supletivo cof cof ");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Moon") == 0){
	 bot.createMessage(msg.channel.id, "O Affs te ama, da uma chance pra ele Bebe");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Lady") == 0){
	 bot.createMessage(msg.channel.id, "Essa tem Respeitao, tem popotão, e um namorado brabão.");
 }
 });
 
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Daniel") == 0){
	 bot.createMessage(msg.channel.id, "Alguem solicitou Recrutamento Completo?");
 }
 });
 
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Satiro") == 0){
	 bot.createMessage(msg.channel.id, "Vou te meter a esporrada");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Vieirinha") == 0){
	 bot.createMessage(msg.channel.id, "O Dia que aquele tanso responder alguma coisa certa, tu me avisa anjo.");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Aninha") == 0){
	 bot.createMessage(msg.channel.id, "Aaii, coragem né gente. Pelamor di deus.");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Ivan") == 0){
	 bot.createMessage(msg.channel.id, "Nao sou o Majin Buu, mas vo ti cume.");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Boi") == 0){
	 bot.createMessage(msg.channel.id, "A vem o poi, A vei a vata, A vei o poi Rã rã.");
 }
 });
  bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Mahara") == 0){
	 bot.createMessage(msg.channel.id, "Gente vou pegar meu bloco de notas ^_^");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Cuim") == 0){
	 bot.createMessage(msg.channel.id, "A mais cheirosa de todas. Cuim, Decim jeito tu me matas sua linda");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Marcelo") == 0){
	 bot.createMessage(msg.channel.id, "Quêêêêêêêêêêêêêêêêêêêêêêêê :O");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Junior") == 0){
	 bot.createMessage(msg.channel.id, "Alguem viu o Marcelin?");
 }
 });
 bot.on("messageCreate", (msg) => {
if(msg.content.indexOf("Pru, aquele recado pra") == 0){
	 bot.createMessage(msg.channel.id, "Oi dona <@"+msg.mentions[0].id+"> a pessoa que mais te ama é o " +msg.author.mention);
}
});
bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Ruth") == 0){
	 bot.createMessage(msg.channel.id, "Tu és tri baita guria, mas bah");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Holy") == 0){
	 bot.createMessage(msg.channel.id, "Cóu Foi Léék, Ridijaneru. Puxo Meu peso no supino Lek");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Diego") == 0){
	 bot.createMessage(msg.channel.id, "Me puxa pra solo duo com vcs");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Dieguito") == 0){
	 bot.createMessage(msg.channel.id, "Eu faço anuncios");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("Affs") == 0){
	 bot.createMessage(msg.channel.id, "Ilude mais que o Mágico de Oz");
 }
 });
 bot.on("messageCreate", (msg) => {
 if(msg.content.indexOf("O Dani") == 0){
	 bot.createMessage(msg.channel.id, "Ele é o Amorzinho da vida da Lady goxtosa");
 }
 });
  bot.on("messageCreate", (msg) => {
if(msg.content.indexOf("Yuki") == 0){
	 bot.createMessage(msg.channel.id, "Pessoas lindas como <@"+msg.mentions[0].id+"> que gostam de Bring me the horizon, já tem espaço no meu coração né " +msg.author.mention);
}
});
 
bot.connect();
