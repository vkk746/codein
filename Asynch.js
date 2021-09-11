//Hoisting in javascript
//we have creation phase and execution phase
//Hiosting in javascript is machanism where varriable and fuction declaration
// are moved to the top of their scope before the code execute

//what is scope chain and Loxicle Scoping in javascript
//The scope chain is used to resolve the value of varriable name in js
//lexical scoping means ki inner bala fn apne parent bale function ke varriable ko excess kar sakta but 
//parrent balla inner bale function k varriable ko excess nhi kar sakta


//what is closures in javascript
//

// difference b/w synchronous javascript and asynchronous javascript
//like agar aap two kam hai to aap jab tak dusra kam nhi kar sakte jabtak pahla kam khatm na ho jaye
//But in Asynchronous me dono kam ek sath chalte jo pahle ho jayega bo pahle print ho jayega

const fun2=() => {
    console.log(`function 2 is called`);
}
const fun1=() =>{
    console.log(`function 1 is called`);
    fun2();
    console.log(`function 1 is called again`);
}
fun1();
/*function 1 is called
function 2 is called
function 1 is called again*/
//yha yha print ek serial se ho rha hai thats why it is synchronous function
 

// now ab asynchronous bala dekhte hai

const fun2=()=>{
    setTimeout(()=>{//setTimeout ek asynchronous function hai
        console.log(`Function 2 is called`);

    },2000);//yha hamne 2000 milisecond pass kiye means time tak wait karna hai
}
const fun1=()=>{
    console.log(`Function 1 is called`);
    fun2();
    console.log(`Function 1 is called again`);
}
fun1();
/*Function 1 is called
Function 1 is called again
Function 2 is called*/
//yha output serial se nhi aya kyonki pahla bala jyada time le rha tha


//Event loop
//Event loop means jo bhi function massege queue me aya event loop se bo stack me challa jata and
//uska finally execution ho jata hai


//Function currying
//currying is a techniqe to evaluting function with multiple time
//argument,into sequence of function with single argument


//what is the output sum(5)(6)(7)
//above line similar like sum(5)(6)(7)  yha per bhi sequence  of function hai
//with single argument
//is sum ko nikalne k liye hame three function write karne homge

function sum(num1){//second function first function k num1 ko excess kar lega
    console.log(num1);//and third function first and second both k argument excess
     return function (num2){// kar lega is prakar unka sum de denge
         console.log(num1,num2);
         return function(num3){
            console.log(num1+num2+num3);
        }
     }
     
}
sum(5)(6)(7);