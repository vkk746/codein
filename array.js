var mynames=['rajesh','kamlesh','dharmesh',52];//ese array banate hai
//in javascript array me hum different type of datatype store krasakte hai

//traversal of array
//var myname=['Vikram','Ramjeet','ramakant','rajeev'];
console.log(myname[1]);
console.log(myname[0]);
console.log(myname[2]);
console.log(myname[3]);
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
}
// for of loop value return karta while for in loop index return karta hai

// Array.prototype.forEach()
// call a function for each elements in the array

myname.forEach(function(element,index,array){
    console.log(element+'index :'+index+ ','+array);
});
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
// include yh batata hai ki yh value isme present hai ya nhi agar presen to true dega

// filter in array
// Array.prototype.find()-> find mathod
//
const price=[200,300,400,500,600,800];
const findEle = price.find((element) => {
    return element>400;
});
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
//Array.prototype.filter() -> filter mathod

const price=[200,300,400,500,600,800];
const newPrice=price.filter((element,index,array) => element<500);
console.log(newPrice);
// find only one data deta while filter mathod usse sabhi choti value deta hai


//How to sort and compare a array
//Array.sort() -> sort mathod
const months=['march','feb','janbery','dec','nov'];
console.log(months.sort());
// yh alphabetic oreder me sort kar deta hai
console.log(price.sort());
const array1=[1,30,4,100000,99];
console.log(array1.sort());
// yh number ko as string sort karta hai like 23 and 100 me yh 23 ko bada batayega 23 100 k bad ayega
//isiliye yh sort mathod number k liye shi nhi hai only for string

// array.push() ==> push mathod se data ko array me insret kiya jata hai
// but push se last me data insert kiya jata hai

const animal=['dog','pig','cow','lion'];
animal.push('chicken');
console.log(animal);
// push mathod array ki length ko return karata hai
const count= animal.push();// yha push array ki length return karega
console.log(count);
// push matthod se ek se jyada value add kar sakte hai
animal.push('bhed','bakari','chuha');
console.log(animal);


// Array.unshift()=> unshift mathod data ko starting me add karta hai 
//whi push last me data add karta hai
animal.unshift('human','elefent');
console.log(animal);
// yh bhi array ki length return karata hai

//Array.pop() => pop mathod remove the element from the last
const plants=['barcolli','Gobi','muli','pyaj'];
console.log(plants);
console.log(plants.pop()); // pop bah vallue return karata jo delete hoti
console.log(plants);

// Array.shift() => yh first element ko delete karata hai
console.log(plants.shift());// yh bhi bahai value return katra
console.log(plants);

// splice mathod use for adding and removing the value
//syntex Arrayname.splice(index,howmany,data);
//index-> kis index se add karna hai
// howmany->kitne value delete karani hai
//data->jo add karna hai
//is mathod se kahi bhi add kara sakte hai

const plants=['barcolli','Gobi','muli','pyaj'];
const newMonths=plants.splice(4,0,'dec');// index 4 se add karna dec, 0->means zero delete karna
console.log(plants);
console.log(newMonths);// splice mathod delted element  return karta hai

//update mathod
//like hame muli ka m capital karna to bo hum update mathod se kar sakte hai
//ham splice mathod se hi updatae kar sakte hai
plants.splice(2,1,'Muli');// means 2 se start karna, 1data remove karna,Muli ko add kar dega
console.log(plants);//isse update ho gya
// agar hamare pass bhut sara data ho tab kaise delete karenge
//tab ham indexof mathod se uska index pata kar lenge and remove kar denge
const plants=['barcolli','Gobi','muli','pyaj','dhaniya','alu','bhindi'];
const indexnum=plants.indexOf('dhaniya');//yha se uska index pata chal jayega
if(indexnum!=-1){
    const macs=plants.splice(indexnum,1,'DHaniya');//splice mathod jo remove karega bo macs me jayega
    console.log(plants);
    console.log(macs);
}
else{
    console.log('No such Data found');//agar nhi present tab print hoga
}

//map and reduce mathod
//Arrayname.map()
//syntex
/* let newArray=Array.map(callback(currvalue,index,array) => {
    //return statement it is return array
});
 const array2=[1,4,9,16,25];
 // num>9 means 9 se greater vale print karane hai
 let newArr=array2.map((element,index,array) => {
     return element>9;
 });
 console.log(array2);
 console.log(newArr);// isse return array me true false likhe honge jo greater
 //output above code [false,fales,false,true,true]
 // hoga uski jagah true and jo 9 se less hoga uski jagah false 
// m>9 means 9 se greater vale print karane hai
const array2=[1,4,9,16,25];
 let newArr=array2.map((element,index,array) => {
     return `index no= ${index} and the value is ${element} belongs to ${array}`;
 });
 console.log(array2);
 console.log(newArr);*/
 /* output above code
 
  'index no= 0 and the value is 1 belongs to 1,4,9,16,25',
  'index no= 1 and the value is 4 belongs to 1,4,9,16,25',
  'index no= 2 and the value is 9 belongs to 1,4,9,16,25',
  'index no= 3 and the value is 16 belongs to 1,4,9,16,25',
  'index no= 4 and the value is 25 belongs to 1,4,9,16,25'
]

// find the square root of array element
const array3=[25,36,49,64,81,100,121,144];
let newArr=array3.map((element,index,array) => {
    return Math.sqrt(element);
});
console.log(array3);
console.log(newArr);

//multyply 2 each element in the array and return only those who is greater than 10
// here we use channing mathod
const Arr=[2,4,5,6,8,10,12];
let newArray=Arr.map((element,index,array) => {
    return element*2;// yha hamne sabhi element me two ka multyply kar diya
}).filter((element,index,array) => {//yha se bo element filter kiye jo 10 se greater hai
    return element>10;
})
console.log(newArray);*/// o/p-> [ 12, 16, 20, 24 ]

//Reduce mathod
// flatten array means to convert 3d and 2d array into single dimensional array
//reduce function takes four argument
// it return single value
/* four argument
Accumulator
currentvalue
index
array
const array2=[18,19,13,14];
let newArr=array2.reduce((accumulator,element,index,array) => {
    return accumulator+=element;
});
console.log(newArr);

// we can also use with the map and filter
// first multyply each element to and then filter only greater than 10 and sum all element 
// which is greater than two

const Arr=[2,4,5,6,8,10,12];
let newArr1=Arr.map((currval,index,array) => {
     return currval*2;
}).filter((currval,index,array) => {
    return currval>10;
}).reduce((accumulator,currval,index,array) => {
    return accumulator+=currval;
});
console.log(newArr1);
 //how to flaten array means convert 3d and 2d into 1d array
 const arr2=[
     ['vikram','rahul'],
     ['Ramjeet','Ramakant'],
     ['Rajeev','kalyan'],
     ['pramod','kaluu'],
 ];
 // it is a 2d array
 // ise 1d array me convert karenge
 let flatArr=arr2.reduce((accum,currval,index,array) => {
     return accum.concat(currval);
 });
 console.log(flatArr);*/
 /*o/p->[
  'vikram',  'rahul',
  'Ramjeet', 'Ramakant',
  'Rajeev',  'kalyan',
  'pramod',  'kaluu'
] yh 1d me ban gaya
// now dekhenge array k andar k array me array pass karaye to bo add hoga single array me kya
const arr2=[
    ['vikram','rahul'],
    ['Ramjeet','Ramakant'],
    ['Rajeev','kalyan'],
    ['pramod','kaluu', ['kela','mela']],
];
let flatArr=arr2.reduce((accum,curval,index,array) => {
    return accum.concat(curval);
})
console.log(flatArr);
/*o/p
[
  'vikram',
  'rahul',
  'Ramjeet',
  'Ramakant',
  'Rajeev',
  'kalyan',
  'pramod',
  'kaluu',
  [ 'kela', 'mela' ]
] yha usne bhiter bale array ko concatinate nahi kiya






















