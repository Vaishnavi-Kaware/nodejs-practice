const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'username',
  database: 'delta_app',
  password: 'password'
});

//Insert Data(single data)
//let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?,?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
//Multiple Data Insert
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["123b", "123_newuserb", "abcb@gmail.com", "abcb"],
  ["123c", "123_newuserc", "abcc@gmail.com", "abcc"],
];

try{
// connection.query(q,user,(err,result) =>{
  //multiple
  connection.query(q,[users],(err,result) =>{
  if (err) throw err;
  console.log(result);
  // console.log(result.length);
  // console.log(result[0]);
  // console.log(result[1]);
})
}catch (err){
  console.log(err);
}


connection.end();




