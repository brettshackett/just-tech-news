//import the sequelize constructor from the library
const Sequelize = require('sequelize');

//create connection to our database, pass in your mysql information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', '$hackettBrett2', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;