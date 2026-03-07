const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'username',
  database: 'delta_app',
  password: 'password'
});

let getRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
    
  ];
}


let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data=[];
for (let i = 1; i <= 100; i++){
  //console.log(getRandomUser());
  data.push(getRandomUser());

}

try{
  connection.query(q,[data],(err,result) =>{
  if (err) throw err;
  console.log(result);
})
}catch (err){
  console.log(err);
}


connection.end();




