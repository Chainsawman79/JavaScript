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
let x="global";
function doingStuff(){
    if(true){
        var x="local";
    }
    console.log(x);
}
doingStuff();
console.log(x);
function doingStuff(x){
    console.log()
}
