const express = require('express')
const app = express()
const PORT = 5000;
const cors = require('cors');
const mongoDB = require('./db')

// Connect DB
mongoDB();

app.use(cors())
app.use(express.json())

app.use('/api/book',require('./routes/book'))
app.use('/api/user',require('./routes/user'))

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`App listening at ${PORT}`)
})