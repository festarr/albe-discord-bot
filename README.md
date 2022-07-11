# albe-discord-bot
Albe is a discord bot that allows users to enter a champion's name, and they will be returned with the champion's info and build links

The only command supported is `!albe <championName>`

This makes use of Riot's API and formats the data nicely for the user as the Bot sends an embed message after their command.

I made this in one day so code could be improved. More specifically that switch statement, which I have plans on fixing up eventually.


TODO:
1. Fix switch statement by making a `nicknames.json` file that will contain all possible nicknames for all champion id's
2. Add feature to show tips (i.e. user is not familiar with a champion so they can look them up and get tips on how to face them)
3. Add champion role (i.e. fighter, assassin, mage)
4. Add a jest test suite (to check every nickname of each champion)
