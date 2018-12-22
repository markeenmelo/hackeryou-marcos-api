const mongoose = require('mongoose')
const server = require('./server')

var port = process.env.PORT || 8080;


server.listen(port, async () => {
    await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
    console.log(`Database connected at ${process.env.DB_URI}`)
    console.log(`App listening on port ${port}`)
});
