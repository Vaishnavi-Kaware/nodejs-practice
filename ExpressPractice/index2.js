//Routing
const express = require('express')
const app = express() 
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/apple', (req, res) => {
  res.send('Apple Path')
})


app.use((req,res) =>{
  res.status(404).send("Page Not Found");
})





app.listen(port, () => { //listen method inside app object. create web server and Listen incoming api request
  console.log(`Example app listening on port ${port}`)
})