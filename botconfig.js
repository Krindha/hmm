module.exports = {
  Admins: ["708983835018395679"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: "?", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/msapnkyn", //Support Server Link
  Token: process.env.Token || "OTYxODI3MTA5MDEyMTM1OTY2.Yk-pTA.SflXTU_sbIZL4E4IVyYIOKzwqNc", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "961827109012135966", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "LlVseOq8KUNzlB3Vx5GYVzvB3ByEydNt", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "kanha", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://www.chandigarhnews.live/", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "THELOLBOY", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "losingtime.dpaste.org", //- The host name or IP of the lavalink server.
    port: 2124, // The port that lavalink is listening to. This must be a number!
    pass: "SleepingOnTrains", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "3b54f6dfbaec4157b92824fe1c5a345e", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "756839acd4114355b942074e966e1a6d", //Spotify Client Secret
  },
};
