const dbConfig = require('../config/db')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.URL
db.carsUserDetails = require('./carsUserDetails.model')(mongoose)

module.exports = db
