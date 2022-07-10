require('dotenv').config();
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log(`Bot logged in!`);
});

client.on('messageCreate', async (msg) => {
  //guard for messages with no command prefix and bot messages
  if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

  //grab argument (using array for possible future features)
  let args = msg.content.slice(process.env.PREFIX.length).trim().split(' ');

  //guard for command entered with no arguments
  if (!args[0]) return;

  console.log(`\n$ User Input: ${args}\n`);

  //first argument will be champion for now
  let champion = setChampion(args);
  await checkForNicknames(champion, msg);
});

//helper function that takes user input and formats it for the api
function setChampion(args) {
  //if champion has two+ words, we'll capitalize both words
  for (let i = 0; i < args.length; i++) {
    args[i] = args[i].charAt(0).toUpperCase() + args[i].slice(1);
  }

  //join all words (hopefully it's just 2 at most)
  args = args.join('');

  return args;
}

//api call function
async function getChampData(champion, msg) {
  let currentVersion;

  //get version from api endpoint
  try {
    let response = await fetch(process.env.VERSION_URL);
    currentVersion = (await response.json())[0];
  } catch (error) {
    console.log(
      '\nERROR: Something went wrong with the League API. Bad news code might need updating'
    );
    console.error(error);
    return;
  }

  //get champ data using the user's input and most up to date version
  try {
    let response = await fetch(
      `${process.env.DDRAGON_URL}/${currentVersion}/data/en_US/champion/${champion}.json`
    );
    return await response.json();
  } catch (error) {
    msg.channel.send(
      'ERROR: Invalid Champion Name. Please use `!albe <champion Name>`'
    );
    console.log('\nERROR: Invalid Champion Name\n');
    console.error(error);
    return;
  }
}

//checks for common abbreviations of champions as well as possible user input that doesn't align with official champ id
async function checkForNicknames(champion, msg) {
  let champData;

  switch (champion) {
    default:
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Ali':
      champion = 'Alistar';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Aph':
      champion = 'Aphelios';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Asol':
      champion = 'AurelionSol';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Bel'veth`:
      champion = 'Belveth';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Bel'Veth`:
      champion = 'Belveth';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Blitz':
      champion = 'Blitzcrank';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Cait':
      champion = 'Caitlyn';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Cass':
      champion = 'Cassiopeia';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Cho':
      champion = 'Chogath';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Cho'gath`:
      champion = 'Chogath';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Cho'Gath`:
      champion = 'Chogath';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Dr.Mundo':
      champion = 'DrMundo';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Mundo':
      champion = 'DrMundo';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Drmundo':
      champion = 'DrMundo';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Eve':
      champion = 'Evelynn';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Evelyn':
      champion = 'Evelynn';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Ez':
      champion = 'Ezreal';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Fid':
      champion = 'Fiddlesticks';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Fiddle':
      champion = 'Fiddlesticks';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Gp':
      champion = 'Gangplank';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Heim':
      champion = 'Heimerdinger';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Heimer':
      champion = 'Heimerdinger';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Dinger':
      champion = 'Heimerdinger';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Jarvan':
      champion = 'JarvanIV';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Jarvaniv':
      champion = 'JarvanIV';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'JarvanIv':
      champion = 'JarvanIV';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'J4':
      champion = 'JarvanIV';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Kai'sa`:
      champion = 'Kaisa';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Kai'Sa`:
      champion = 'Kaisa';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Kass':
      champion = 'Kassadin';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Kat':
      champion = 'Katarina';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Kha'zix`:
      champion = 'Khazix';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Kha'Zix`:
      champion = 'Khazix';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'K6':
      champion = 'Khazix';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Kogmaw`:
      champion = 'KogMaw';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Kog'maw`:
      champion = 'KogMaw';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Kog'Maw`:
      champion = 'KogMaw';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Kog':
      champion = 'KogMaw';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Lb':
      champion = 'Leblanc';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'LeBlanc':
      champion = 'Leblanc';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Lee':
      champion = 'LeeSin';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Leo':
      champion = 'Leona';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Liss':
      champion = 'Lissandra';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Malph':
      champion = 'Malphite';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Malz':
      champion = 'Malzahar';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Mao':
      champion = 'Maokai';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Yi':
      champion = 'MasterYi';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Mf':
      champion = 'MissFortune';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Mord':
      champion = 'Mordekaiser';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Morde':
      champion = 'Mordekaiser';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Morg':
      champion = 'Morgana';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Naut':
      champion = 'Nautilus';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Nid':
      champion = 'Nidalee';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Nida':
      champion = 'Nidalee';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Noc':
      champion = 'Nocturne';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Noct':
      champion = 'Nocturne';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Ori':
      champion = 'Orianna';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Panth':
      champion = 'Pantheon';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Reksai':
      champion = 'RekSai';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Rek'sai`:
      champion = 'RekSai';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Rek'Sai`:
      champion = 'RekSai';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Rek':
      champion = 'RekSai';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'RenataGlasc':
      champion = 'Renata';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Seraph':
      champion = 'Seraphine';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Sej':
      champion = 'Sejuani';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Shyv':
      champion = 'Shyvana';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Raka':
      champion = 'Soraka';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Tahm':
      champion = 'TahmKench';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Tk':
      champion = 'TahmKench';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Kench':
      champion = 'TahmKench';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Tali':
      champion = 'Taliyah';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Trist':
      champion = 'Tristana';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Trynd':
      champion = 'Tryndamere';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Tf':
      champion = 'TwistedFate';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Dyr':
      champion = 'Udyr';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Vel'koz`:
      champion = 'Velkoz';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case `Vel'Koz`:
      champion = 'Velkoz';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Vlad':
      champion = 'Vladimir';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Voli':
      champion = 'Volibear';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Ww':
      champion = 'Warwick';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Wukong':
      champion = 'MonkeyKing';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Wu':
      champion = 'MonkeyKing';
      champData = await getChampData(champion, msg);
      if (champData) {
        champion = 'MonkeyKing';
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Xin':
      champion = 'XinZhao';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Yas':
      champion = 'Yasuo';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;

    case 'Zil':
      champion = 'Zilean';
      champData = await getChampData(champion, msg);
      if (champData) {
        console.log(champData);
        sendEmbedMessage(champData, champion, msg);
      }
      break;
  }
}

function sendEmbedMessage(champData, champion, msg) {
  const champInfo = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(
      `${champData.data[champion].name}, ${champData.data[champion].title}`
    )
    .setDescription(champData.data[champion].lore)
    .setThumbnail(
      `${process.env.DDRAGON_URL}/${champData.version}/img/champion/${champData.data[champion].id}.png`
    )
    .addFields(
      { name: '\u200B', value: '\u200B' },
      {
        name: 'ARAM',
        value: `[Build](https://na.op.gg/modes/aram/${champData.data[champion].id}/build)`,
        inline: true,
      },
      {
        name: `Summoner's Rift`,
        value: `[Build](https://na.op.gg/champions/${champData.data[champion].id})`,
        inline: true,
      },
      {
        name: `URF`,
        value: `[Build](https://na.op.gg/modes/urf/${champData.data[champion].id}/build)`,
        inline: true,
      }
    )
    .setTimestamp()
    .setFooter({
      text: 'Albe bot made by Spritz#1872. Unaffiliated with opgg and Riot',
      iconURL:
        'https://cdn.discordapp.com/attachments/744736069001412638/775971111350566952/Spritz.png',
    });

  msg.channel.send({ embeds: [champInfo] });
}

client.login(process.env.BOT_TOKEN);
