const express = require('express')
const app = express()
const PORT = 5000;
const cors = require('cors');
const { addBook, getUsers } = require('./utils/fileIOUtils');
const mongoDB = require('./db')

mongoDB();

app.use(cors())
app.use(express.json())
app.use('/api',require('./routes/AddBook'))

app.use(['/add_book'],(req,res,next) => {
    console.log("Middleware called for ... ",req.url)
    next()
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.post('/add_book',async (req, res)=>{
    console.log(req.body);
    await addBook(req.body)
    res.send(req.body)
})

app.post('/get_users',async (req, res)=>{
    const userData = await getUsers()
    console.log(req.body)
    // if(userData.includes(req.body)) 
    //     res.status(200).send("Done")
})

app.get('/public/ARLogo.png',(req, res)=>{
    res.sendFile('D:\\stuff\\college\\pbl-project\\Archivist\\archivist\\archivist_backend\\static_files\\ARLogo.png');
})

app.listen(PORT,()=>{
    console.log(`App listening at ${PORT}`)
})