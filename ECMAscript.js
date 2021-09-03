// let vs const vs var
// var==> function scope
// const and let==> Block scope
//const me ek bar value assign karne k bad change nhi kar sakte but let and var me change kar sakte hai
// let and var almost same but const is different
// block means inka scope karli braces takhi seemit rahata hai
// function scope means iska scope pure function me rahata hai

// what is template literals
for(var i=1;i<=10;i++){
    var total=8;
    console.log(`${total} * ${i} = ${total*i}`);
}

// default parameters
// default function parameter allows named parameters to be initialized with default value
// if no value or undefined passed
 
function mult(a,b=3){
    var total=a*b;
    return total;
}
console.log(mult(5));// yha hamne ek hi argument pass kiya hai to hamne b me ek default argument pass kiya hai
//yhi default parameter hai

// fat Arrow function most important
/*const sum = () => {
    let a=6,b=5;
    //let total=a+b;
    return `Two number sum is ${a+b}`;
}
console.log(sum());*/
/*const sum = () => {
    return `Two number sum is ${(a=7)+(b=9)}`;//is taraha se bhi kar sakte hai
}
console.log(sum());*/

// other way without return keyword
 const sum = () => `Two number sum is ${(a=12)+(b=17)}`;// only one line me ho gya
console.log(sum());



