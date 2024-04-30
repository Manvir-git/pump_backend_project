const express =require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Manviradmin:Manirocks@cluster0.2pmww2t.mongodb.net/project")

const notesSchema={
    name: String,
    email: String,
    feedback : String
    

}

const Note= mongoose.model("feedback",notesSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/contactus.html")
})

app.post("/",function(req,res){
    let newNote= new Note({
        email: req.body.femail,
        name: req.body.fname,
        feedback: req.body.fin,
        
    });
    newNote.save();
    res.send("feedback submitted");
})

app.listen(3001,function(){
    console.log("server is running on 3001");
})