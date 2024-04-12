const express = require('express');
const Book = require('../models/Books')

const router = express.Router()

router.post("/addBook", async (req, res)=>{
    try{
        await Book.create({
            BookName: req.body.name,
            BookId: req.body.id
        })
        res.json({success: true})
    }catch(err){
        console.log("Add book Error -- ",err)
        res.json({success: false})
    }
})

module.exports = router;