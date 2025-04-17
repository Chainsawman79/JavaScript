//Arrow Functions
// let doingArrowStuff=x=>console.log(x);
// let addTwonumbers=(x,y)=>console.log(x+y);
// let sayHi=()=>console.log("hi");
// const arr=["Squirrel","alphaca","Buddy"];
// arr.forEach(e=>console.log(e));
 //Spread Operator
// let spread=["so","much","fun"];
// let message=["JavaScript",'is',...spread,"and","very","powerful"];

//Rest operator
// let resultArr=[];
// for(let i=0;i<10;i++)
// {
//     let result=addtwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);
// let addTwonumbers=(x,y)=>{
//     console.log("Adding...");
//     return x+y;
// }
//Scope of the function
// function testAvailabilty(x)
// {
//     console.log("Available here:",x);

// }
// testAvailabilty("hi");
// console.log("Not available hre:",x);
// let z=testAvailbility();
// console.log("Outside the function");

// function doingStuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingStuff();
//Global variables
//If i want to hide the global variable ,this can be done by let,var
// let x="global";
// function doingStuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingStuff();
// console.log(x);
// function doingStuff(x){
//     console.log()
// }
// console.log("Hello Browser My Name is Charchit");
// const arr=[2,5,6,9];
// arr.forEach(e=>console.log(e));
// const arr1=["Charchit",21,"Gupta"];
// arr1.forEach(e=>console.log(e));
// arr1.push(9);
// arr1.forEach(e=>console.log(e));
// const arr=["Charchit",21,"Gupta"];
// arr.fill(3);
// arr.map
// arr.forEach(e=>console.log(e));
//IIFE- Immediately invoked function expression is a way of expressing the function
// (function(){
//     console.log("IIFE");

// })();
//Recursive Function-A function calling itself
// function getRecursive(nr){
//     y=--nr
//     console.log(nr);
//     if(y>0)
//        getRecursive(y);
// } 
// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function:",nr);
//     if(nr>0)
//         logRecursive(nr-1);
//     else
//       console.log("done with recursion");
//     console.log("Ended function:",nr);
// }
// logRecursive(3);
//

//the performance of recursion is slightly worse than performance of reguler iteration 
//Nested function-function inside another function
// function doOuterFunctionStuff(nr)
// {
//     console.log("Outer Function");
//     doInnerFunction(nr);
//     function doInnerFunction(x){
//      console.log(x+7);
    
//     console.log("I can access outer variables");
//     }
// }
// doOuterFunctionStuff(5);
// let functionVariable=function()
// {
//     console.log("Not so secret though");
// }

// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside do FlexibleStufffunction");
// }
// doFlexibleStuff(functionVariable);
//  let youGotThis=function(){
//     console.log("You're really doing well,keep coding!\n")
//  };
// setTimeout(youGotThis,100);

// let youGotThis=function(){
//     console.log("You're really doing well,keep coding!\n")
//  };
// setInterval(youGotThis,100);

