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
var tomr='sunny';
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
var area='circle';
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

