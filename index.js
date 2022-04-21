// Q1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype?
// Ans =>
const parent = { //first Object
    firstName : "Rahul",
    lastName : "Yadav",
    jobRole : "FrontEnd Dev",
    salary : 35000,
    printData : function(){ 
        console.log(`${this.firstName} ${this.lastName} ${this.salary} `)
    }
}
parent.printData();

let child = { // Second Object
    firstName : "Kunal",
    salary : 20000
}

child.__proto__= parent; //inheriting
child.printData(); // Call method of first object in second object
console.log(child); // no change in second object

// Q2. Write code to explain prototype chaining?

let arr = [1,2,3,4,5];

function add(){
    console.log("Add");
}

console.log(arr.__proto__);  // Array()
// it is showing it as array 
console.log(arr.__proto__.__proto__ )// Object()
// here it is showing it as Object
console.log(arr.__proto__.__proto__.__proto__ )// null
// here it is showing it as null 
console.log(add.__proto__)// function()
// it is showing it as function()

console.log(add.__proto__.__proto__) // Object()
// here it is showing it as Object

console.log(add.__proto__.__proto__.__proto__) // null
// here it is showing it as null 

console.log(parent.__proto__) // Object()
// here it is showing it as Object and is a object

console.log(parent.__proto__.__proto__ )//null
// here it is showing it as null

// Javascript everything is object wheather its an array or function .

//Q3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays?

let array = [1,2,3,5,6,7];
let array2 = [11,12,13,14,15,16]
let arr2 = {
    sum:function(arr){
        
        let result = arr.reduce((acc,cur) => acc = acc + cur,0);
        console.log(result);
        
    }
}
arr2.sum(array);
arr2.sum(array2);

// Q4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
function namesOfObject(){
    const keys = Object.keys(child);
    console.log(keys);
  }
  namesOfObject();




//   ___________________________________________
