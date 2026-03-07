//Query String
const express = require('express')
const app = express() 
const port = 3000


app.get("/search",(req,res) =>{
  //console.log(req.query);
  //res.send("no results");

  let { q } = req.query;
  // res.send(`search results for query: ${q}`);
  if (!q) {
    res.send("<h1> nothing tooo searched</h1>");
  }
  res.send(`<h1>search results for query: ${q}</h1>`);
  
})

app.listen(port, () => {//Now server started.
  console.log(`Server running on port ${port}`);
});