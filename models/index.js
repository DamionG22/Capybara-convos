const User = require('./User');
const Topics = require("./topics");

Topics.hasMany(User, {
    foreignKey: "",
    onDelete:"CASCADE"


});

User.belongsTo(Topics, {
    foreignKey: ""


});

module.exports = { User, Topics };
