//difference b/w window and document
//difference between DOM and BOM
/*The Browser Object Model (BOM) is used to interact with the browser.

The default object of browser is window means you can call all the functions of window by
*/
// Dom ka use jab karte jab hame HTML k related work karna hai
alert(location.href);
if(confirm("wants to visit thapa technical")){
    location.href="https://www.youtube.com/c/ThapaTechnical";
}
// DoM nevigation
// dom nevigation batata hai ki document kaise help karta hai html code 
//document ka root element HTML hai
// below jitne bhi mathod bataye bo page per inspect kark aate hai
//document.head karne per head k ander jo likha bo aa jata hai
//document.body similar head ki tarah
//document.body.childNodes->isse body k children node mil jate hai
//document.body.childNodes.length->isse total number of nodes mil jate hai
//document.body.hasChildNodes()-> isse yh pata chalta ki nodes hai isk ya nhi
//document.body.firstChildNodes-> isse ham body ka first element nikalte hai
//document.body.firstChildNodes.firstChildNodes-> isse aur ander chale jayenge
//document.body.parentNode-> isse parent node pata chal jayega
//document.body.nextsibling-> isse uska next sibling milta hai
//document.body.previoussibling->isse usko previous sibling milta hai

//document.getElementById("id name").innerHTML="My name is vikram";
//yha getElementById usko bo id de deta and innerHTMl usme likhe deta k ander phucha
// deta hai agar data change karna chahte to to eqal me bo deta likh dete hai
//console.log(document.getElementsByClassName("title"));isse ham class pata kar sakte hai
 //document.getElementsByTagName("tagname") -> isse bo tag get kar lete hai
 //document.querySelector('id or class or any element').innerHTML="jo data uski jagah rakhna chahte bo"
 //queryselecter se bhi ham element select kar sakte hai
 //id k liye idname se pahle # lagayenge
 //classname k pahle dat(.) lagayenge
 //console.log(document.querySelector(".title").innerHTML);
 //isse hamne uss class me likhe data ko print karaya hai
 