const mongoose = require('mongoose')
const server = require('./server')
const {PORT, MONGODB_URI} = require('./utils/const')

server.listen(PORT, async () => {
  await mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
  console.log(`Database connected at ${MONGODB_URI}`)
  console.log(`App listening on port ${PORT}`)
});
