const mongoose = require('mongoose')
const URL = process.env.URL

const conn = mongoose.connect('mongodb+srv://syash4505:Yash_7DB@cluster1.g3yjs6m.mongodb.net/', {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB"))
.catch(console.error);

module.exports = conn;