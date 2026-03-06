//Path params
const express = require('express')
const app = express() 
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// app.get('/:username', (req, res) => {
//   console.log(req.params);
  
//   res.send('Hello World!')
// })

app.get('/:username/:id', (req, res) => {
  let {username,id} = req.params;

  res.send(`Hello World! @${username}`)
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});