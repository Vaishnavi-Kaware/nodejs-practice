const express = require("express");
const app=express();
const path=require("path")
const port =8080;

app.set('view engine',"ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req, res) =>{
res.render("home")
});

app.get("/rolldice",(req, res) =>{
//res.render("rolldice.ejs")

let diceVal = Math.floor(Math.random()*6)+1;
// res.render("rolldice.ejs",{num:diceVal})
res.render("rolldice.ejs",{diceVal})


});

app.listen(port, ()=>{
  console.log(`conncetion started on port ${port}`);
  
})