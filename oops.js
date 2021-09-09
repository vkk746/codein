//what is object literals
// object literal is simply key:value pair data structure
//example of object literals
/*const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
//these are example here value store in key:value pair
// Using object means object me hm function and varriable ek sath store
//kra sakte hai
//yha person ek object hai


//How to create object?
//1st way


let bioData={
  myName:"Vikram Singh",
  myAge:26,
  getData:function(){//yh object me function bhi banaya
    console.log(`my name is ${bioData.myName} and myage is ${bioData.myAge}`)
  }
}
console.log(bioData.myName);//is property se bo name print kar dega
bioData.getData();//isse object bala function chal jayega


//when ek object k ander dusra object ho tab
//agar aap ek object k ander dusra object add kar rhe tab bhi bo
//key value pair me add hoga
let bioData={
  myName:{//object k ander ka object hai
    realName:"Bheem Singh",
    realAdress:"Sharfuddinpur",
    fatherName:"JaySingh",

  },
  myAge:26,
  getData:function(){//yh object me function bhi banaya
    console.log(`my name is ${bioData.myName} and myage is ${bioData.myAge}`)
  }
}
console.log(bioData.myName.realName);*/// is prakar object k ander k 
//object ka data dat lagaker nikal lenge

//What is This object
//the definetion of 'this' object is that it contain the current coontext
let Mynames="Vikram singh";
function myName(){
  console.log(this.Mynames);
}
myName();
let bioData={
  myName:"Vikram Singh",
  myAge:26,
  getData(){//yh object me function bhi banaya
    console.log(this);
  }
}
bioData.getData();
//o/p-> { myName: 'Vikram Singh', myAge: 26, getData: [Function: getData] }
//yh this object show kar rha iska means ki bo current object
//k element ko poin ker rha hai
//this object arrow function me use nhi kar sakte hai
//tab yh current object ko denote na karke window object ko denote
//karta hai

let bioData={
  myName:{//object k ander ka object hai
    realName:"Bheem Singh",
    realAdress:"Sharfuddinpur",
    fatherName:"JaySingh",

  },
  myAge:26,
  getData:function(){//yh object me function bhi banaya
    console.log(`my name is ${this.myName.realName} and myage is ${this.myAge}`)
  }
}
bioData.getData();
//object ki jagah this likh this iska means this current object ko point karta hai







