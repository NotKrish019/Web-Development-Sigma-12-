// async function greet() {
//     throw "weak connection";
//     return "Hello!"
// }

// greet()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with err :", err);
// })

// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             let num= Math.floor(Math.random() * 10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

// h1 =document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         }, delay);
//     })
// }

// async function demo(){
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     changeColor("blue", 1000);
// }

let url = "https://catfact.ninja/fact"

// fetch(url)
// .then((response) =>{
//     console.log(response);
//     response.json().then((data)=>{console.log(data.fact)});
// })
// .catch((err) => {
//     console.log("ERROR -", err);
// })

// async function getFacts(){
//     let res =await fetch(url);
//     let data = await res.json();
//     console.log(data);
// }