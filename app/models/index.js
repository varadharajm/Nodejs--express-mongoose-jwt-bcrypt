const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db ={};
db.mongoose = mongoose;
db.user = require("../models/user.model");

module.exports = db;
