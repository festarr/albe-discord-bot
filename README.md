# Albe
Albe is a discord bot that allows users to enter a champion's name, and they will be returned with the champion's info and build links

The only command supported is `!albe <championName>`

This makes use of Riot's API and formats the data nicely for the user as the Bot sends an embed message after their command.

I made this in one day so code could be improved. More specifically that switch statement, which I have plans on fixing up eventually.

## Why Albe?
I became a more casual League of Legends players as I aged and didn't have as much time. Due to this, I could not keep up with all the changes the game receives. I ended up just using the popular website op.gg, which works as a bit of a cheat sheet so you know how to build your character (champion).

I decided it was too much trouble to open the website and navigate it to get to the right character I wanted, in the limited time you have before the match begins. That's what Inspired me to make Albe, it shows the champion's name and picture frame, as well as its lore background. I added links to the champion's builds for each game mode (see example below)

## Use Albe

NOTE: Heroku ended its free tier, so the bot is no longer deployed so the link below won't work anymore :(

If you want to try Albe out, you can add it to your Discord server through [this link](https://discord.com/api/oauth2/authorize?client_id=990048689739399218&permissions=0&scope=bot) (you need to have permissions to the server you want to add it to).

Here's an example of the bot's output

![](https://cdn.discordapp.com/attachments/864906898679791669/1293005058840985660/image.png?ex=6705cc4c&is=67047acc&hm=d894e1d471d17c16b6fb84ef1bda7c3d139f01bc1f41922711f1ab553e118c33&)

###
Edit 10/07/2024: Yeah so, looking through the upcoming TODO list, I never got around doing what I wanted to fix. And I probably never will. I stopped playing league of legends so the interest isn't there anymore. Plus Discord.js probably has changed a lot since I last used it, on top of my preference of TypeScript over JavaScript at this point. I'd say the key takeaways I took from this project was familiarizing oneself with a completely new framework. Although Discord.js basically functions as a frontend framework it's not at all like web frontend frameworks like Angular or React. I also learned the importance of the DevOps side of things when it comes to deploying and keeping an app running, as well as the various config options we developers have in terms of security and customizability. Although far from perfect, I'm happy I was able to deliver this small project to be used by a few of my friends while Heroku still had its free tier, it had a single use case and it did it perfectly thanks to its simplicity. On a personal level, my biggest enjoyment was getting hands on with a public REST API that I found interesting: the Riot API. Those cat facts and recipes APIs can only get so interesting after all!

### TODO:
1. Fix switch statement by making a `nicknames.json` file that will contain all possible nicknames for all champion id's
2. Add feature to show tips (i.e. user is not familiar with a champion so they can look them up and get tips on how to face them)
3. Add champion role (i.e. fighter, assassin, mage)
4. Add a jest test suite (to check every nickname of each champion)
