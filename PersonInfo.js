//This is the model. we will connect to the database
const sequelize = require('sequelize');
const sequelize = new sequelize('databaseName', 'Userid', 'Password', {
    host: 'where database is',
    port: 11111,
    dialect: 'mssql',
    dialectOptions: {
        requesttimeout: 60000,
        encrypt: false
    },
    pool: {
        max: 5,
        min: 0,
        idle: 40000
    },
    timezone: 'America/NewYork'
});
