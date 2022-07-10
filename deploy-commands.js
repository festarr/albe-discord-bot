// NOT GONNA USE SLASH COMMANDS UNTIL I NEED TO

// require('dotenv').config();
// const { SlashCommandBuilder } = require('@discordjs/builders');
// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord-api-types/v9');

// const commands = [
//   new SlashCommandBuilder()
//     .setName('champ')
//     .setDescription('Returns champion information!'),
// ].map((command) => command.toJSON());

// const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

// (async () => {
//   try {
//     console.log('Started refreshing application (/) commands.');

//     await rest.put(
//       Routes.applicationGuildCommands(
//         process.env.CLIENT_ID,
//         process.env.GUILD_ID
//       ),
//       {
//         body: commands,
//       }
//     );

//     console.log('Successfully reloaded application (/) commands.');
//   } catch (error) {
//     console.error(error);
//   }
// })();
