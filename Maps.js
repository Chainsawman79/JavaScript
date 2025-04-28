//A map holds a key value pair where the keys can be any datatypes
//remembers the original insertion
//Creation of Map
// const fruits=new Map([["apples",500],["bananas",300],["Oranges",200]]);
// console.log(fruits);

// const fruits=new Map();
// fruits.set("apple",500);
// fruits.set("bananas",300);
// fruits.set("oranges",200);
// fruits.set("oranges",500);
// console.log(fruits);
// console.log(fruits.size);
// console.log(fruits.get("apple"));
// //fruits.delete("apple");
// console.log(fruits.size);
// console.log(fruits.has("apple"));

//for Each
// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+ value+" ";
// })
// console.log(text);
//Map.entries()
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text)


// let text="";
// for(const x of fruits.keys()){
//     text+=x+" ";
// }
// console.log(text);

// let text=0;
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);

//Object as keys
// create objects
// const apples={name:'Apples'};
// const bananas={name:'bananas'};
// const orange={name:'orange'};

// //create a map
// const fruits=new Map();
// //Add new elemants to the map
// fruits.set(apples,200);
// fruits.set(bananas,500);
// fruits.set(orange,300);

// const fruits=[{name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// } 
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);


//structuring

// const person={
//     firstName:"John",
//     lastNmae:"Doe",
//     age:50

// };
// console.log(person);

// Destructuring

// let{firstName,lastNmae}=person;
// let{age}=person;
// console.log(firstName);
// console.log(lastNmae);
// console.log(age);
////Destructuring is not destructive
//let{firstName,lastNmae,counrtry="US"}=person;


//String destructuring
// let name="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]= name;

// const fruits=["bananas","Oranges","Apples","Mangoes"];
// let{[0]:fruit1,[3]:fruit2}=fruits;
// console.log(fruit2);

//const numbers=[10,20,30,40,50,60,70];

//Swapping javaScript variables
// let firstName="John";
// let lastName="Doe";
// [firstName,lastName]=[lastName,firstName];

// let x=5;
// let z=x**2;// x is not modified
// console.log(z);
// let z1=Math.pow(x,2);
// console.log(z1);

// let x=5;
// x**=2;
// console.log(x);

// const fruits=["Banana","Orange","Apple","Mango"];
// console.log(fruits.includes("Mango"));
// console.log(fruits.includes("Banana",3));


//Trailing Comma
//const arr=["one","two","three",];
// const person={
//     firstName:"John",
    
//     age:30,
// }

