
// console.log("NodeJS started 🚀");

// console.log("hello");

// console.log(process.argv);

// const name=process.argv[2];
// console.log("Hello "+ name);

const someValue=require("./math")

console.log(someValue.number);
console.log(someValue. sum(4,5));
console.log(someValue.mul(4,5));

//console.log(someValue); //only one value

const math=require("./math")
console.log(math);
console.log(math.sum(3,3));


const math2=require("./math")
console.log(math2.div(10,5));

const math3=require("./math")
console.log(math3.div(10,5));