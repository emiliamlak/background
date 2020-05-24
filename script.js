var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//
// // Root scope(window)
//
// // var fun = 5;
// //
// // function funFunction() {
// //     //child scope
// //     var fun = "hellooo";
// //     console.log(1, fun);
// // }
// //
// // function funerFunction() {
// //     //child scope
// //     var fun = "Bye";
// //     console.log(2, fun);
// // }
// //
// // function funestFunction() {
// //     //child scope
// //     fun = "AHHH";
// //     console.log(3, fun);
// // }
// //
// // console.log("window", fun);
// // funFunction();
// // funerFunction();
// // funestFunction();
//
// // function isUserValid(bool) {
// //     return bool;
// // }
// //
// // var answer = isUserValid(true) ? "You may enter" : "Access denied";
// // var automatedAnswer =
// //     "Your account # is" + (isUserValid(false) ? "1234" : "not available");
// //
// // function condition() {
// //     if (isUserValid(true)) {
// //         return "You may enter";
// //     } else {
// //         return "no";
// //     }
// // }
// //
// // var answer2 = condition();
//
// // function moveCommand(direction) {
// //     var whatHappens;
// //     switch (direction) {
// //         case "forward":
// //             whatHappens = "you encounter a monster";
// //             break;
// //         case "back":
// //             whatHappens = "you arrived home";
// //             break;
// //         case "right":
// //             whatHappens = "you found a river";
// //             break;
// //         case "left":
// //             whatHappens = "you run into a troll";
// //             break;
// //         default:
// //             whatHappens= "please enter a valid direction";
// //     }
// //     return whatHappens;
// //
// // }
//
// // const player = 'boby';
// // let experience = 100;
// // let wizardLevel = false;
// //
// // if (experience > 90) {
// //     let wizardLevel = true;
// //     console.log('inside', wizardLevel);
// // }
// // console.log('outside', wizardLevel);
//
// // const obj = {
// //     player: "bobby",
// //     experience: 100,
// //     wizardLevel: false
// // }
// //
// // const player = obj.player;
// // const experience = obj.experience;
// // let wizardLevel = obj.wizardLevel;
// //
// // const {player, experience} = obj;
// // let { wizardLevel} = obj;
//
// // const a = 'simon';
// // const b = true;
// // const c = {};
// //
// // const obj1 = {
// //    a: a,
// //     b: b,
// //     c: c
// // }
// // const name1 = "SAlly";
// // const age = 34;
// //     const pet = "horse";
// // const greetingBest = `Hello ${name1} you seem to be ${age-10}, what a lovely ${pet} you have `;
//
// // function greet(name1='', age=30, pet='cat') {
// //     return `Hello ${name1} you seem to be ${age-10}, what a lovely ${pet} you have `
// //     }
// //
// // function add2(a,b) {
// //     return a + b;
// // }
// //
// //  const add3 = (a,b) => a + b;
//
// const array1 = [1, 2, 10, 16];
// const double = [];
// const newArray1 = array1.forEach((num) => {
//     double.push(num * 2);
// })
//
// console.log(double);
//
// const mapArray = array1.map(num => num * 2);
// console.log(mapArray);
//
// //filter
//
// const filterArray = array1.filter(num => num === 5);
// console.log('filter', filterArray);
//
// //reduce
//
// const reduceArray = array1.reduce((accumulator, num) => {
// return accumulator + num
// }, 0);
// console.log('reduce', reduceArray);