const mongoose = require('mongoose')
const server = require('./server')
require('dotenv').config()

const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hackerYouProject'

server.listen(PORT, async () => {
    await mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    console.log(`Database connected at ${MONGODB_URI}`)
    console.log(`App listening on port ${PORT}`)
});
