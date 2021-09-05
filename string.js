// A javascript string is zero or more characters wrriten inside quot
// javascript string are used for storing and manipulating text
// you can use single or double quotes
// strings can be created as primitives
//from string literals, or as object, using the string() constructer
let myname='vinod';
let mychannelname='Thapa technical';
let ytname=new String('thapa technical');// by using constructer be take string
console.log(myname);
console.log(mychannelname);
console.log(ytname);

// to find the length of string
//string.length
let mychannelname='Thapa technical';
console.log(mychannelname.length);// o/p->15

//Escape charecter
let anysentense="we are so called "viking" from north"
console.log(anysentense);// ese yh error de rha kyonki string k ander double quates hai
//agar escape charecter use kare to error se bacha sakte hai
//right code
let anysentense="we are so called \"viking\" from north";// yha jo backslash hai bo escape charecter hai yha
console.log(anysentense);
// without escape charecter ke bhi print kar sakte hai
let anysentense='we are so called "viking" from north';
// single code k ander duoble quates to error nhi ayegi
console.log(anysentense);

// to find index of any word
let myname="I am a Thapa technical";
console.log(myname.indexOf("Thapa"));// o/p->13
console.log(myname.indexOf('t',10));
console.log(myname.lastIndexOf('T',10));// o/p->7

//searching for a string in a string
//string.search()-> we use search mathod
let myname="I am a Thapa technical";
let sdata=myname.search("Thapa");
console.log(sdata);// search mathod bhi us word or later ki position batata hai


// Extracting string parts
// there are 3 mathod to extracting a part of string
// slice(start,end)
//substring(start,end)
//substr(start,length)
// slice mathod
// slice mathod extract the part of string and return the extract part
// in a new string

let str="Apple, Banana, kiwi";
let res=str.slice(0,4);
console.log(res);
let met=str.slice(7,-2);// end se string -1 se start hoti hai
console.log(met);
// starting index jo doge bahi se select karega and end endex tak jayega
// but yh end index ko include nhi karta hai
// by using this original array will not change

// Display only 280 charecter of a string like the one used in twitter

let myTwitter="I am Vikram Singh and I am from farrukhabad Uttar Pradesh and I have completed my btech from Madan Mohan Malviya University of technology Gorakhpur I know the knowledge of c++ and I also learn the DSA";
let myActualacount=myTwitter.slice(0,280);
console.log(myActualacount);
// yha yh only 280 charecter tak show karega usse jyada nhi kyonki itna hi extract
// karna hai

// substring() mathod 
// substring is similar to slice
// but substring can not acept negative argument
let str="Apple, Banana, kiwi";
let res=str.substring(0,4);
console.log(res);// o/p->Appl
// similar slice ki tarah de rha hai
let str="Apple, Banana, kiwi";
let res=str.substring(7,-2);
console.log(res);// o/p->Apple,
// yha negative value dene per bhi yh Apple, o/p de rha agar negative doge to bah zero se count karega

// substr() mathod
// it is similar to slice but substr me end ki jagah string ki length hoti hai
let str="Apple, Banana, kiwi";
let res=str.substr(0,4);
console.log(res);// o/p->Appl


// replacing string content
//string.replace(searchFor,replacewith)
//serchFor -> means jis data ko replace krana chahte bo likho
//replacewith -> jis data ko uski jagah rakhna chahte
let myBiodata="I am a vikram singh from farrukhbad";
// mai apne name ki v ko capital karna chahta to bo replace mathod se kar sakte hai
let myres=myBiodata.replace("vikram", "Vikram");
console.log(myres);// now ab bo capital ho gya hai
// lekin original string koi fark nhi padega
//isme jo first match kar gya yh usi ko replace karta aur ko nhi

// Exracting string charecter
//These are three mathod to extracting string charecter
//charAt(position)
//charCodeAt(position)
//property acess[]
 let str="Hello world";
 console.log(str.charAt(0));// o/p->H
 //zero position per rakhe charecter ko de diya hai

 // charCodeAt()
 console.log(str.charCodeAt(0));// o/p ->72
 // yh uniqe code return karta hai
 
 // challenge
 // return the uniqu code of last charecter in the string

 let str="Hello World";
 let Lastchar=str.length-1;
 console.log(str.charCodeAt(Lastchar));// o/p->100


 // property access
 let str="Hello World";
 console.log(str[0]);// o/p->H
 console.log(str[3]);// o/p ->l

 // Other usefull mathod*
 // toUpperCase()
 //toLowerCase()
 let myname="My name is Vikram Singh";
 console.log(myname.toUpperCase());
 console.log(myname.toLowerCase());
 // isse uppercase and lower case me convert ho jata hai

 //concat() mathod
 let fName="Vikram";
 let lName="Singh";
 console.log(fName+lName);
 console.log(fName.concat(lName));
 console.log(fName.concat(" " ,lName));
 // is prakar se concatinate kar sakte hai

 // string.trim() mathod
 //trim mathod removes whitespace from both side of string

 let str="      Hello world     ";
 // trim mathod starting and end k space ko remove kar deta hai
 console.log(str.trim()); //o/p ->Hello world

 // coverting a string into array
 // a string converted into array with the help of split() mathod
 let txt=" a,b,c,d,e";
 console.log(txt.split(","))// comma k basis per split kar rahe hai
 // o/p->[ ' a', 'b', 'c', 'd', 'e' ]
 console.log(txt.split(" "));// o/p ->[ '', 'a,b,c,d,e' ]



























