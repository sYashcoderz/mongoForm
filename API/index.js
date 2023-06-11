const express = require('express')
const conn = require('./db/index')
const cors = require('cors');

const app = express()
app.use(express.json());
app.use(cors());
const PORT = 8080

const Schema = require('./models/register')

app.get('/', (req, res)=> {
    res.send("I am from Register app")
})

app.get('/user', async(req, res)=>{
    const data = await Schema.find();
    console.log("Data ==>>", data)
    res.json(data);
});

app.post('/adduser',(req, res)=>{
    console.log("todo",req.body);

    const dodo = new Schema(req.body);

    dodo.save();

    res.json(dodo);
})

app.listen(PORT, () => {console.log(`Listening at the port ${PORT}`)})