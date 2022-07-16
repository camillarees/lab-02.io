
// let user = prompt('What is your name?');
// console.log('Welcome ' + user)

// function getAnswer1 (){
//     'use strict';
//     let guessFruit;
//     do {
//         guessFruit = prompt("Is my favorite fruit a watermelon?").toLowerCase();
//         if (guessFruit != "yes") {
//             alert("That's incorrect, please guess again")
//         } else {
//             document.write("That's correct!");
//         }

//     } while (guessFruit != "yes")
// }

// getAnswer1();

// function getAnswer2 (){
//     'use strict';
//     let guessColor;
//     do {
//         guessColor = prompt("Is my favorite color red?").toLowerCase();
//         if (guessColor != "no") {
//             alert("That's incorrect, please guess again")
//         } else {
//             document.write("You're right. My favorite color is actually blue.");
//         }

//     } while (guessColor != "no")
// }

// getAnswer2();

// function getAnswer3 (){
//     'use strict';
//     let guessFlower;
//     do {
//         guessFlower = prompt("Is my favorite flower a rose?").toLowerCase();
//         if (guessFlower != "no") {
//             alert("Sorry, you guessed wrong! Try again!")
//         } else {
//             document.write("Yeah it's not a rose. I actually love lilacs and peonies.");
//         }

//     } while (guessFlower != "no")
// }

// getAnswer3();

// function getAnswer4 (){
//     'use strict';
//     let guessIcecream;
//     do {
//         guessIcecream = prompt("Is my favorite ice cream salted caramel?").toLowerCase();
//         if (guessIcecream != "yes") {
//             alert("Hm, that's not right. Try again buddy!")
//         } else {
//             document.write("YES! I love salted caramel");
//         }

//     } while (guessIcecream != "yes")
// }

// getAnswer4();

// function getAnswer5 (){
//     'use strict';
//     let guessBeverage;
//     do {
//         guessBeverage = prompt("Is my favorite beverage a chai latte?").toLowerCase();
//         if (guessBeverage != "yes") {
//             alert("Nope! Try again.")
//         } else {
//             document.write("YES! I love chai!");
//         }

//     } while (guessBeverage != "yes")
// }

// getAnswer5();

// function getAnswer6 (){
// let correctAnswer = 14;
// for (let i = 0; i < 4; i++) {
//     console.log(i)
//     let guessNumber = prompt("Guess a number");
//     if (guessNumber == correctAnswer){
//         alert("That's correct!"); 
//         break;
//       } else if (i >= 3) {
//         alert("You've exhausted your attempts. The answer is 14.")
//         break;
//     } else if (guessNumber < correctAnswer) {
//         alert("Too low, guess again.");
//     } else if (guessNumber > correctAnswer) {
//         alert("Too high, guess again.");
//     } else { 
//         alert("Not a valid input, try a number");
//     }
// }
// }

// getAnswer6();

function getAnswer7 () {
let whereLived = ['montana', 'washington', 'utah', 'arizona'];
let guessState = prompt ("Can you guess which state I live in?").toLowerCase();
let chances = 5

while(whereLived.indexOf(whereLived) == -1) {
    console.log(i);
for (let i = 0; i < 7; i++)
    if (guessState == whereLived) {
        alert("That's correct!"); 
        break;
    } else if (guessState != correctAnswer2) {
        alert("That's incorrect, try again.");
    } else if (i >= 5) {
        alert("You've exhausted your attempts. The answer is Utah.");
        break;
        }
}
}
    getAnswer7();
    
// keep track of total number of correct answers and display how many out of 7 questions were correct
