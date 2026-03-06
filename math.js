const sum =(a,b)=>a+b
const mul=(a,b)=>a*b
const PI = 3.14;
const var1= "hello";

//module.exports= 123;  //The second line overwrites the first one.

module.exports={sum,mul,number:123};

// module.exports= 123; //only one value

// let obj={
//   sum:sum,
//   mul:mul,
//   PI:PI,
//   var1:var1,
// };


// module.exports=obj;


module.exports={
  sum:sum,
  mul:mul,
  PI:PI,
  var1:var1,
};

module.exports.div=(a,b)=>a/b;

exports.div=(a,b)=>a/b;
//exports=5;//not correct
