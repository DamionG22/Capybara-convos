const seedTopics = require("./topics-seed");
const seedUsers = require("./user-seed");


const sequelize = require("../config/connection");


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    
    await seedTopics();
    console.log("\n----- TOPICS  SEEDED -----\n");

    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

process.exit(0);

};

seedAll();