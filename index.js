const { Client, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hello from harsh's bot",
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply({
    content: "Pong",
  });
});
// Log in to Discord with your client's token
client.login("");
