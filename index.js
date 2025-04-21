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

// class ClassNmae{
//     constructor(prop1,prop2)
//     {
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassNmae("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript",2.4,"brown","chihuaha");
// console.log(dog.dogName,"is a",dog.breed,"and weighs",dog.weight,"kg");

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
// }
// let p=new Person("Maaike");
// console.log("hi",p.firstName,p.lastName);

// class Person{
//     constructor(firstName,lastName="doe"){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
// }
// let p=new Person("Maaike");
// console.log("hi",p.firstName,p.lastName);

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstName);
//     }
// }
// let p=new Person("Maaike","van Putten");
// p.greet();

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;

//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstName);
//     }
//     compliment(name,object){
//         return "That's a wonderful " +object+", "+name;
//     }
// }
// let p=new Person("Maaike","van Putten");
// p.greet();
// let compliment=p.compliment("Harry","Hat");
// console.log(compliment);

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName=firstName;
//         this.#lastName=lastName;

//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstName);
//     }
//     compliment(name,object){
//         return "That's a wonderful " +object+", "+name;
//     }
// }
// let p=new Person("Maaike","van Putten");
// console.log(p.firstName);

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         if(firstName.startsWith("M")){
//         this.#firstName=firstName;
//     }
//     else{
//         this.#firstName="M" +firstName;
//     }
//         this.#lastName=lastName;

//     }
    
// }
// let p=new Person("kay","Moon");
// console.log(p.firstName,p.lastName);

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName=firstName;
//         this.#lastName=lastName;
//     }
//     get firstName(){
//         return this.#firstName;
//     }
//     get firstName(){
//         this.#firstName=firstName;

//     }
//     get lastName(){
//         return this.#lastName;
//     }
//     get lastName(){
//         this.#lastName=lastName;
//     }
    
// }
// let p=new Person("Maria","Saga");
// console.log(p.get firstName());
// //Inheritance is the concept of classes can have child classes 

// class Vehicle{
//     constructor(color,currentSpeed,maxSpeed)
//     {
//         this.color=color;
//         this.currentSpeed=currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("moving at",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }
// class MotorCycle extends Vehicle{
//     constructor(color,currentSpeed,maxSpeed,fuel)
//     {
//         super(color,currentSpeed,maxSpeed);
//         this.fuel=fuel;
//     }
//     doWheelie(){

//     }
// }
// let motor=new MotorCycle("Black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();
