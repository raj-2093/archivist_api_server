const mongoose = require('mongoose');

const dbName = "archivist_db"
const password = "6CWOOtI5CdvjtXUQ"

const mongo_uri = `mongodb+srv://archivist:${password}@cluster0.cdryhj6.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`


const mongoDB = async ()=>{
    try{
        await mongoose.connect(mongo_uri)
        console.log(`DB connected`); 
    }catch(err){
        console.log(`Error connecting to db : ${err}`);
    }
}

module.exports = mongoDB;