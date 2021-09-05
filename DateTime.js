// javascript Date object represents a single moment in Time in a plateform-Independent formate.Date Objects contain a number
//That represent milisecond since 1 January 1970 UIC
// Creating Date object
//There are four ways to create Date object

//new Date()
//new Date(year,month,day,hour,minute,second,milisecond)
// it takes 7 argument
//new Date(milisecond)
//we can not avoid month section
//new Date(Data string)
/*let currDate=new Date();
console.log(currDate);// o/p->2021-09-05T09:40:51.653Z
//yh object Date and Time deta jo current me hai
console.log(new Date().toLocaleString());// o/p->5/9/2021, 3:17:01 pm
// isse hame exact time mil raha jo hamare mobile me show hota hai
console.log(new Date().toString());// o/p->Sun Sep 05 2021 15:19:42 GMT+0530 (India Standard Time)
// yh bala mathod days bhi deta hai

//Date.now() mathod
console.log(Date.now());
//javascript counts months from 0->11
//means january is 0 and dec is 11
let d=new Date(2021,8,5,7,33,30,34);
console.log(d.toLocaleString());// o/p->5/9/2021, 7:33:30 am
//isse date and time create kar sakte hai
//toLocalString se yh local me convert ho jata hai jha aap rahate hai

//new Date(dateString) mathod
let d=new Date("September 5,2021,15:44:23");
console.log(d.toLocaleString());// o/p->5/9/2021, 3:44:23 pm
//ese bhi date and time create kar sakte hai

// how to get indivisual date
let currDate=new Date();
console.log(currDate.toLocaleString());
console.log(currDate.getFullYear());//isse only year show hoga
console.log(currDate.getMonth());//isse only month show hoga
console.log(currDate.getDate());//isse only Date show hoga
console.log(currDate.getDay());//isse only day show hoga
/*5/9/2021, 3:54:49 pm
2021
8
5
0


// How to set Indivisual dae
let currDate=new Date();
console.log(currDate.setFullYear(2023));
console.log(currDate.setFullYear(2023,10,5));
console.log(currDate.setMonth(10));
console.log(currDate.setDate(5));;
console.log(currDate.toLocaleString());

// Time Mathods
let currTime=new Date();
console.log(currTime.getTime())
console.log(currTime.getHours());
console.log(currTime.getMinutes());
console.log(currTime.getSeconds());
console.log(currTime.getMilliseconds());*/
/*1630838503212
16
11
43
212*/

//how to set indivisual time
let currTime=new Date();
console.log(currTime.setHours(5));
console.log(currTime.setMinutes(5));
console.log(currTime.setSeconds(10));
console.log(currTime.setMilliseconds(1000));;
/*
1630799202207
1630798542207
1630798510207
1630798511000*/
//o/p milisecons me aa rha hai












