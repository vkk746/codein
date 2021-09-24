/*let puppeteer=require("puppeteer");
//puppeteer.launch({headless:false});//isse hamara ek black crome page open ho jata hai
let browserStartPromise=puppeteer.launch({
    headless:false,
    slowMo:250,
    defaultViewport:null,
    args:["--start-maximized","--disable-notification"]

});
browserStartPromise.then(function(browserObject){
     let browserTabOpenPromise=browserObject.newPage();
     browserTabOpenPromise.then(function(page){
         console.log("new Tab open");
     })
})*/
// this code can write also in this way
let puppeteer=require("puppeteer");
//puppeteer.launch({headless:false});//isse hamara ek black crome page open ho jata hai


let browserStartPromise=puppeteer.launch({
    headless:false,
    //slowMo:250,
    defaultViewport:null,
    args:["--start-maximized","--disable-notification"]//0th index bale se page ka size maximum
    //ho jayega

});
let page;
let browser,rTab;
browserStartPromise.then(function(browserObject){
    browser=browserObject;
     let browserTabOpenPromise=browserObject.newPage();
     return browserTabOpenPromise;//return k bad yh dusre then per jayega
}).then(function(newTab){
    page=newTab;
    console.log("new Tab");
    let gPagePromise=newTab.goto("https://www.google.com/");//go to se yh page is page per
    //pahuch jayega
    return gPagePromise;
}).then(function(){//yh then isliye likha kyonki previus bala puppeteer promise return kar
    //rha hoga
    console.log("youtube page is open");
    let waitTypingPromise=page.type("input[title='search']","pepcoding");
    return waitTypingPromise;
}).then(function(){
    let enterwillbeDonepromise=page.keyboard.press("Enter",{delay:100});
    return enterwillbeDonepromise;
}).then(function(){
    console.log("wait for visible element");
    let waitForElementPromise=page.waitForSelector(".LC201b.DKV0Md",{visible:true});
    return waitForElementPromise;
}).then(function(){
    let eleClickPromise=page.click(".LC201b.DKV0Md");
    return eleClickPromise;
}).then(function(){
    let waitModelPromise=page.waitForSelector("#lp_Modal_close",{visible:true});
    return waitModelPromise;
}).then(function(){
    let clickModal=page.click("#lp_Modal_close",{delay:100});
    return clickModal;
}).then(function(){
    let allLisPromise=page.$$(".site-nav-li");
    return allLisPromise;
}).then(function(allElm){
    let elementWillBeclickedPromise=allElm[6].click();
    return elementWillBeclickedPromise;
}).then(function(){
    let waitPromise=page.waitFor(2000);
    return waitPromise;
}).then(function(){
    let listofOpenTabPromise=browser.pages();
    return listofOpenTabPromise;
}).then(function(array){
     let rtab=array[array.length-1];
     let waitforlevel1=rtab.waitForSelector('h[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',{visible:true});
     return waitforlevel1;
}).then(function(){
    let clickrlevel1Promise=rtab.click('h[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]',{visible:true});
}).then(function(){
    console.log("level 1 is opened");
}).catch(function(err){
    console.log("error is coming"+err);
})
