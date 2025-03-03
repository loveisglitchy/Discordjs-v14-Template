module.exports = (client) => {
  client.pickPresence = async () => {
    // different types can be a number and can be found here. https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
    let statusArray = [
      {
        type: 5,
        content: "/commands",
      },
      {
        type: 3,
        content: `over ${client.guilds.cache.size} guild(s)`,
      },
      {
        type: 0,
        content: "Discord.js v14",
      },
    ];

    let option = Math.floor(Math.random() * statusArray.length);

    client.user.setPresence({
      activities: [
        {
          name: statusArray[option].content,
          type: statusArray[option].type,
        },
      ],
    });
  };
};
