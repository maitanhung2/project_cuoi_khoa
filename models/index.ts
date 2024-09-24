const dbConfig = require("../config/db.config.ts");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose: process.env.MONGODB_URL,
    url: ""
};
db.mongoose = mongoose;
db.url = dbConfig.url;
// db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;