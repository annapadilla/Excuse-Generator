window.onload = () =>{
let myArray=[]
let myAdj=["Blue","Big","Small","Red"]
let myNoun=["car", "dog","fish", "turtle"]
let myVerb=["ate","threw", "broke","crushed"]
let myPoss=["my homework", "my assignment", "my laptop", "my pen"]
let myWhere=["in the house", "during my lunch","on my way to class","in the supermarket"]

let randomValue1 = myAdj[Math.floor(Math.random() * myAdj.length)];
let randomValue2 = myNoun[Math.floor(Math.random() * myNoun.length)];
let randomValue3 = myVerb[Math.floor(Math.random() * myVerb.length)];
let randomValue4 = myPoss[Math.floor(Math.random() * myPoss.length)];
let randomValue5 = myWhere[Math.floor(Math.random() * myWhere.length)];

excuse= randomValue1 + " " + randomValue2 + " " + randomValue3 + " " + randomValue4 + " " + randomValue5


document.querySelector("#excuse").innerHTML=excuse;
}