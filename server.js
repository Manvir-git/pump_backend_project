const express =require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Manviradmin:Manirocks@cluster0.2pmww2t.mongodb.net/project")

const notesSchema={
    email: String,
    mobile: String,
    city: String,
    pin_code: String,
    country: String,
    Description: String,
    Product_code: String,
    Product_name:String,
    Title: String,
    Company_name: String,
    Land_line:String,
    State: String

}

const Note= mongoose.model("orders",notesSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+"/form.html")
})

app.post("/",function(req,res){
    let newNote= new Note({
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city,
        pin_code: req.body.pincode,
        country: req.body.country,
        Description:req.body.description,
        Product_code: req.body.productCode,
        Product_name: req.body.productName,
        Title: req.body.title,
        Company_name:req.body.company,
        Land_line:req.body.landline,
        State:req.body.state
    });
    newNote.save();
    res.send("thank you your order has been placed");
    // res.redirect('/');
})

app.listen(3001,function(){
    console.log("server is running on 3001");
})