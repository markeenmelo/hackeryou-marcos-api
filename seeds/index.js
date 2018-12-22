const mongoose = require('mongoose')
const Movie = require('../models/Movie')
const movies = require('./movies')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hackerYouProject'


const truncateDatabase = async () => {
  return Promise.all([Movie.deleteMany(), Movie.deleteMany()])
}

const makeSeeds = async () => {
  await mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
  await truncateDatabase()
  await Promise.all(movies.map(movie => movie.save()))
  mongoose.connection.close()
}

makeSeeds()
