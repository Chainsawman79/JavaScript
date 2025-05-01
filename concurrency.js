//call back
// function doSomething(callback)
// {
//     callback();
//     console.log("Hello");
// }
// function sayHi(){
//     console.log("hi");
// }
// doSomething(sayHi);


// function judge(grade) {
//     switch (grade) {
//       case "A":
//         console.log("You got an", grade, "amazing");
//         break; 
//       case "B":
//         console.log("You got a", grade, "well done");
//         break;
//       case "C":
//         console.log("You got a", grade, "alright");
//         break;
//       case "D":
//         console.log("You got a", grade, "hmm . . .");
//         break;
//       default:
//         console.log("An", grade, "!what?!");
//     }
//   }
//   function getGrade(score,Callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//             case score>=60:
//                 grade="D";
//                 break;
//             default:
//                 grade="F";
//              }
//                   callback(grade);
//             }
//                 getGrade(85,judge)

// Promises
// Promises: This function needs two parameters, and these parameters are callbacks. We have called them resolve and reject here. When resolve is called, the promise is presumed to be successful, and whatever is passed to resolve is returned and used as the promise's fulfillment value. When reject is called, the promise is considered to have failed, and whatever is passed to reject is used as the promise's rejection reason (often an error object or message)."

// let promise = new Promise((resolve, reject) => {
//     let x = 20;
//     if (x > 15) {
//         resolve(x);
//     } else {
//         reject("Too low");
//     }
// });

// promise
//     .then((value) => {
//         console.log("Resolved:", value1);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     });

// const promise = new Promise((resolve,reject)=>{
    // resolve("Success!!");
    // reject("d"); })
    //.then(value=>{    //Success
//     console.log(value);
//     return "WE";
//         //  |
//  })       //V 
//   .then(value=>{        //WE   
//     console.log(value);
//     return "can";
// })
// .then(value=>{  //can
//     console.log(value);
//     return "chain";
// })
// .then(value=>{    //chain
//     console.log(value);
//     return "promises";
// })
// .then(value=>{   //promises
//     console.log(value);
// })
// .catch(value=>{
//     console.log(value);
// });

function saySomething(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("something"+x);
        },10000);
    });
}

async function talk(x) {
    const words=await saySomething(x);
    console.log(words);
    
}
talk(2);
talk(4);
talk(8);
