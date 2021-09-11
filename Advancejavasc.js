//what is event propagation
//event propagation mode determines in which order the elements recieve the event
//event bublling
//event capturing
 
const add=(a,b) => {
    return Math.abs(a+b);
}
const sub=(a,b) => {
    return Math.abs(a-b);
}
const mult=(a,b) => {
    return Math.abs(a*b);
}

//yha hame gar calculation karna hai to sabhi ko differently call karana hoga
const calculator=(num1,num2,operator) =>{
    return operator(num1,num2);
}
//abb ham her ek operation per form kar sakte hai
console.log(calculator(5,2,add));//ese hame addition ho jayega pahle ham addition ,subtraction
//all k seprate function banakar ek calculator name ka function bana lenge 
//and by using calculator all operation perform karayenge
console.log(calculator(5,2,sub));

// call back function bo hota jab ek function dusre function me as a argument pass hota hai
// yha calculater higher order function hai
// and add,sub,mult,yh cll back function hai kyonki yh function higher oerder function me pass
//hue hai

