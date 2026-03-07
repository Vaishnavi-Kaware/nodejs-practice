const express = require("express");
const app=express();
const path=require("path")
const port =8080;

app.set('view engine',"ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req, res) =>{
res.render("home")
});


app.get("/ig/:username",(req, res) =>{
  //looping statement
  const followers = ["Vishal","Divya","Aditya","Mayur"];

let {username} =req.params;
//console.log(username);
// res.render("instagram.ejs",{username})
res.render("instagram.ejs",{username,followers})

});


app.listen(port, ()=>{
  console.log(`conncetion started on port ${port}`);
  
})