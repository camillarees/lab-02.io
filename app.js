'use strict';

let score = 0;

let user = prompt("What is your name?");
console.log("Welcome " + user);

function getAnswer(message, correct1, correct2) {
    let answer = prompt(message).toLowerCase();
    if (answer === correct1 || answer === correct2) {
        alert("Thats right!");
        score++;
        return;
    }
    alert("That's not correct.");
}
getAnswer("Is my favorite fruit a watermelon?", "y", "yes");
getAnswer("Is my favorite flower a rose?", "no", "no");
getAnswer("Is my favorite ice cream salted caramel?", "y", "yes");
getAnswer("Is my favorite beverage a chai latte?", "y", "yes");
getAnswer("Is my favorite color red?", "n", "no");


function getAnswer6() {
    let correctAnswer = 14;
    for (let i = 0; i < 4; i++) {
        console.log(i)
        let guessNumber = prompt("Guess a number");
        if (guessNumber == correctAnswer) {
            alert("That's correct!");
            score++;
            break;
        } else if (i >= 3) {
            alert("You've exhausted your attempts. The answer is 14.")
            break;
        } else if (guessNumber < correctAnswer) {
            alert("Too low, guess again.");
        } else if (guessNumber > correctAnswer) {
            alert("Too high, guess again.");
        } else {
            alert("Not a valid input, try a number");
        }
    }
}

getAnswer6();

function getAnswer7() {
    let whereLived = ['pennsylvania', 'washington', 'utah', 'delaware'];
    let guessState = prompt("Can you guess a state I've lived in?").toLowerCase();
    let attempts = 5;

    while (whereLived.indexOf(guessState) == -1 && attempts > 0) {
        alert("That's not correct. Try typing Washington, Pennsylvania, Utah, or Delaware");
        attempts--;
        guessState = prompt("Can you guess a state I've lived in?").toLowerCase();
    }
    if (whereLived.indexOf(guessState) != -1) {
        alert("That's correct!");
        score++;
    }
}

getAnswer7();

alert("Congratulations " + user + "! You got " + score + " out of 7 questions correct.");
