//console.log(10+"20");//both concatinate ho jayenge o/p-1020
//console.log(9-"5");// yha subtract ho jayega o/p-4
//console.log("java"+"script");//concatinate kar dega o/p-javascript
//console.log("vinod"-"thapa");//o/p-Nan
//console.log(" "+0);
//console.log(true+true);// o/p-2 kyonki true=1
//console.log(false+false);// o/p-0 false=0
//console.log(false-true);// o/p--1
//what is NaN--jab two string ko subtract karte tab ata hai
//NaN is a global property of object
// it is a varriable in global scope
//var isvriable;
//console.log(isvriable);
//var myPhonenumber=7897890846;
//var myName="Vikram Singh";
//console.log(isNaN(myPhonenumber));
//console.log(isNaN(myName));
//console.log(NaN==NaN);// false dega kyoki NaN means not a number
//console.log(3**3);// yha three ka three times multiply hoga o/p-27
//console.log(3**5);// o/p-243
// ** is exponatial operator
//var a=19;
//var b=10;
//var c=a;
//a=b;
//b=c;
//console.log(a);
/*var tomr='sunny';
if(tomr=='rain'){
    console.log('take a raincoat');
}
else{
    console.log('No need to take a rain');
}
// write a programm to chake year is leap year or not
var year=2020;
if(year%400==0){
      console.log("This is a leap year");
}
else{
    if(year%4==0){
        console.log("This is a leap year");
    }
    else{
        console.log("this is not leap year");
    }
}

// conditional ternary operator
// varriablename=(condition)?value1:value2
var age=17;
console.log((age>=18)? "you can vote" : "you can't vote");

//switch statement
// Evaluates an expression, matching the expression's value to case clause
/*var area='circle';
var PI=3.142,l=5,b=4,r=3;
switch(area){
    case 'circle' :
        console.log("The arae of circle is : " + PI*r**2);
        break;
    case 'triangle' :
        console.log("The arae of triangle is : " + (l*b)/2);
        break;
    case 'square' :
        console.log("The arae of circle is : " + r**r);
        break;

    default:
        console.log("Data is not vallid");
    
    
}
var num=0;
while(num<=10){
    console.log(num);
    num++;
}
var numm=0;
do{
    console.log(numm);
    numm++;
}while(numm<=10);

// for loop
/*for(intilzer;ConditionRule;iterator){

}*/
/*for(var nam=0;nam<=10;nam++){
    console.log(nam);
}*/
/*for(var i=1;i<=10;i++){
    var table=8;
    console.log(table +"*"+i+" = "+table*i);
}*/
//below write a function defination syntex
/*function functionname(){
    statement
}*/
// programm sum of two number using function
function sum(a,b){// parameters pass
    var total=a+b;
    return total;
}
//sum();
//sum(20,30);// argument pass
var tata=sum(50,30);
console.log(tata);
// sum of two number by using ananonymous function
var funexp=function(a,b){
    var total=a+b;
    return total;
}
console.log("two no sum is  "+funexp(5,20));// yha call is tarah hua hai
