const sequelize = require("../config/connection");
const {User, Topics } = require("../models")
const topicData = require("./topicData.json");
const userData = require("./userData.json");



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await Topics.bulkCreate(topicData, {
        individualHooks: true,
        returning: true,
      });
  
    process.exit(0);
  };

seedDatabase();