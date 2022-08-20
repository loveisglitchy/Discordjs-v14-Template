# Discordjs-v14-Template

Discord.js v14 Template using Rest API

Features:

- Based on FusionTerrors v14 Handler
- ~~Supports Only Slash Commands~~ Now Supports Legacy Commands as well!!!
- Cooldowns enabled on Legacy Commands
  - Will support cooldowns with slash commands soon
- Executes the bot In a Base Class
- Custom Handler for Components
- Anti-Crash Handler

**Logs Everything to the console when starting**

![Imgur](https://i.imgur.com/FxUCwtnl.png)

**Easy to Read**

**_Slash Command:_**

```js
module.exports = {
    owner: boolean, //  whether command can only be used by the bot owner?
    developer: boolean, // weather the command is for developer guild or global: true or false
    category: "category",
    data: new SlashCommandBuilder()
        .setName('name') // command name
        .setDescription('description') // command description
        .setDefalultMemberPermissions(PermissionsBitField.Flags.<permission>), // member permissions
  async execute (interaction, client) => {
    // Code here
  },
};
```

**_Legacy Command:_**

```js
module.exports = {
    // The following properties can be in any order and Required options are NAME and EXECUTE function.
    name: "name",
    description: "description",
    category: "category",
    cooldown: Number, // how many seconds to wait for the command to be used again.
    owner: boolean, // whether command can only be used by the bot owner?
    enabled: boolean, // whether the command can be executed?
  async execute (interaction, client) => {
    // Code here
  },
};
```

# Getting Started

Click `Use this template` at the top of this page.

- Rename `.env.example` to `.env` (THIS FILE CANNOT HAVE ANY SPACES)

  - Paste in your `BotToken`, `AppID`, `ClientSecret` from the [Discord Developer Portal](https://discord.com/developers/applications)
  - Insert your Developer Guild ID for testing purposes in `DevGuild`
  - Insert your desired legacy command prefix as `Prefix`
  - Insert your own UserID as `BotOwnerID`
    - If this is not done, `reload` command will not function correctly.
  - Insert your mongoose connection string as `Connect`, Get your free connection string [Here](https://www.mongodb.com/)
    - If you don't know how to get this string, there are videos on this like [this one](https://tinyurl.com/mongo-setup)
  - The `WebhookURL` will setup your anti-crash. You can create this in `Discord Settings > Integrations > Webhooks`
    - Be careful! This link will have very sensitve data! You only need the string after `https://discord.com/api/webhooks/${AppID}/`.
    - Paste the long string into `WebhookURL`. This is called your Webhook Token. DO NOT SHARE IT!!!

- After you have edited and saved the `env` file to your needs, you are ready ready to start the bot!
  - Install all dependencies with `npm install` << Remember, DO NOT INCLUDE ANY PACKAGE NAMES HERE!
  - Run the bot with `nodemon`.
  - Customize the project to your liking and enjoy!

Found any bugs or have any suggestion about the template? Create a issue or pull request!
