/var mynames=['rajesh','kamlesh','dharmesh',52];//ese array banate hai
//in javascript array me hum different type of datatype store krasakte hai

//traversal of array
//var myname=['Vikram','Ramjeet','ramakant','rajeev'];
console.log(myname[1]);
console.log(myname[0]);
console.log(myname[2]);
console.log(myname[3]);*/
// we can check the length of the array
console.log(myname.length);
for(var i=0;i<myname.length;i++){
    console.log(myname[i]);
}

// for in loop and for of loop
for(let elements in myname){
    console.log(elements);
}
//for in loop hame index ki vallue deta hai

// for of loop
for(let element of myname){
    console.log(element);
}*/
// for of loop value return karta while for in loop index return karta hai

// Array.prototype.forEach()
// call a function for each elements in the array

myname.forEach(function(element,index,array){
    console.log(element+'index :'+index+ ','+array);
});*/
// is forEach loop se bhi value print kara sakte hai similar like call back function
myname.forEach(function(element,index,array) => {
    console.log(element+'index :'+index+ ','+array);
});


//searching and filter in array
// Array.prototype.indexOf()
//return the first index of an array element with in the array equal
//to an element if element is not foud the it returns -1, it search the element from the zero index

var myname=['Vikram','Ramjeet','ramakant','rajeev'];
console.log(myname.indexOf('rajeev',1));//yha jo 1 hai means index one se search karna hai
// isse index pata chalta hai o/p-3 means index three per rajeev hai
console.log(myname.lastIndexOf('Ramjeet'));
// LastIndex last se element search karta while indexOf from starting se
console.log(myname.includes('Ramjeet'));
// include yh batata hai ki yh value isme present hai ya nhi agar presen to true dega*/

// filter in array
// Array.prototype.find()-> find mathod
//
const price=[200,300,400,500,600,800];
const findEle = price.find((element) => {
    return element>400;
});*/
//console.log(findEle);
//yha bhi farword se check karta hai
// yha filter kar rahe jo 400 bada hai bahi return karna bhai
 
const price=[200,300,400,500,600,800];
const findEle=price.find((element) => {
    return element<400;
});
//console.log(findEle);
// but find mathod only one value return karta hai
const price=[200,300,400,500,600,800];
const findEle=price.findIndex((element,index,array) => element<400);//arrow function me without return k bhi value prin kra sakte hai

console.log(findEle);
// findIndex usse small value ka index return karata hai
//

//filter mathod





