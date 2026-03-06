const express = require('express')
const app = express() //function
const port = 3000
//app-object
//console.dir(app); //app object inside many function,method ,object

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => { //listen method inside app object. create web server and Listen incoming api request
  console.log(`Example app listening on port ${port}`)
})

app.use((req,res) =>{
  //console.log(req);
  
  console.log("Request recevied");
 // res.send("this is a basic response")

//   res.send({
//     name:"vaishnavi",
//     marks:95
//   })

res.send("<h1>Welcome</h1>")//sending respond from our server
  
})
