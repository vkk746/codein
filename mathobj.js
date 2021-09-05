// javascript math object allows you to perform mathmatical task on number
console.log(Math.PI);// isse pi ki value mill jayegi
// Math.round()->it returns the value of x its nearest integer
let num=10.2565;
console.log(Math.round(num));//o/p->10 iska nearest integer de diya

//Math.pow(x,y) ->returns the value of x to the power of y
console.log(Math.pow(2,3));//o/p->8
console.log(2**3);

// Math.sqrt(x)-> returns the root vallue

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(100));

//Math.abs(x)->it returns the absolute value
// yh hamesh positive value deta hai
console.log(Math.abs(-55));//o/p->55
console.log(Math.abs(-55.9));//o/p->55.9
console.log(Math.abs(-955));//o/p->955

// Math.ceil(x)->returns the nearst integer agar decimal k bad ek bhi digit hai to yh ek se 
//increment kar deta hai
//round jab increment karta jab decimal k bad 5 ya usse bada hai
console.log(Math.ceil(4.51));//o/p->5
console.log(Math.round(4.51));//o/p->5
console.log(Math.ceil(99.1));//o/p->100
console.log(Math.round(99.1));//o/p->99
//Math.floor()

//Math.min()->it returns the minimum value
console.log(Math.min(0,150,30,20,-8,-200));//o/p->-200

//Math.max()->it returns the maximum value
console.log(Math.max(0,150,30,20,-8,-200));//o/p->150

//Math.random()
// it returns the a random number b/w zero(inclusive), and 1(exclusive)
console.log(Math.random());//o/p->0.3777581069627052 yh random number aa rha hai
console.log(Math.floor(Math.random()*10));//yha output 0->10 k b/w ayega

//Math.trunc()
// it returns the integer part of a number
console.log(Math.trunc(4.6));//o/p->4
console.log(Math.trunc(-99.1))//o/p->-99
//yh decimal bale part ko hataker return kar deta hai




