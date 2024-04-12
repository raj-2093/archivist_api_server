const fs = require('fs');

async function addBook(data){
    // Reading a JSON file
let existing_data = JSON.parse(fs.readFileSync('./jsons/books.json', 'utf8'))
console.log("existing data --- ", existing_data);

existing_data.push(data)
fs.writeFileSync('./jsons/books.json', JSON.stringify(existing_data), 'utf-8')
}

async function getUsers(){
    let user_data = JSON.parse(fs.readFileSync('./jsons/users.json', 'utf8'))
    console.log("User data --- ", user_data);
    return user_data;
}

module.exports = {
    addBook, getUsers
}