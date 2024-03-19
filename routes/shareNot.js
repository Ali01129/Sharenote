const express = require('express');
const router = express.Router();
const Note=require('../models/note');

//add Note
router.post('/addnote',async(req,res)=>{
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    
    let note=await Note.findOne({code: randomNumber});
    while(note){
        randomNumber = Math.floor(Math.random() * 9000) + 1000;
        note=await Note.findOne({code: randomNumber});
    }
    note=await Note.create({
        code:randomNumber,
        text:req.body.text
    });
    res.json({ok:true,code:note.code});
});

router.post('/getnote',async(req,res)=>{
    let note=await Note.findOne({code:req.body.code});

    if(note){
        res.send({ok:true,note:note.text});
    }
    else{
        res.status(404).json("No note found")
    }
});

module.exports = router;