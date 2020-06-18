const mongoose = require('mongoose')
const config = require('config')

const db = config.get('mongoURI')

const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    }).then(() => {
        console.log('DB connected')
    }).catch(e => {
        console.error(e.message)
        process.exit(1)
    })
}

module.exports = connectDB