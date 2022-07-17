'use strict';

let score = 0;

let user = prompt('What is your name?');
console.log('Welcome ' + user)

function getAnswer1 (){
    let guessFruit;
    do {
        guessFruit = prompt("Is my favorite fruit a watermelon?").toLowerCase();
        if (guessFruit != "yes") {
            alert("That's incorrect, please guess again")
        } else {
            document.write("That's correct!");
            score++;
        }

    } while (guessFruit != "yes")
}

getAnswer1();

function getAnswer2 (){
    let guessColor;
    do {
        guessColor = prompt("Is my favorite color red?").toLowerCase();
        if (guessColor != "no") {
            alert("That's incorrect, please guess again")
        } else {
            document.write("You're right. My favorite color is actually blue.");
               score++;
        }

    } while (guessColor != "no")
}

getAnswer2();

function getAnswer3 (){
    let guessFlower;
    do {
        guessFlower = prompt("Is my favorite flower a rose?").toLowerCase();
        if (guessFlower != "no") {
            alert("Sorry, you guessed wrong! Try again!")
        } else {
            document.write("Yeah it's not a rose. I actually love lilacs and peonies.");
               score++;
        }

    } while (guessFlower != "no")
}

getAnswer3();

function getAnswer4 (){
    let guessIcecream;
    do {
        guessIcecream = prompt("Is my favorite ice cream salted caramel?").toLowerCase();
        if (guessIcecream != "yes") {
            alert("Hm, that's not right. Try again buddy!")
        } else {
            document.write("YES! I love salted caramel");
              score++;            
        }

    } while (guessIcecream != "yes")
}

getAnswer4();

function getAnswer5 (){
    'use strict';
    let guessBeverage;
    do {
        guessBeverage = prompt("Is my favorite beverage a chai latte?").toLowerCase();
        if (guessBeverage != "yes") {
            alert("Nope! Try again.")
        } else {
            document.write("YES! I love chai!");
               score++; 
        }

    } while (guessBeverage != "yes")
}

getAnswer5();

function getAnswer6 (){
let correctAnswer = 14;
for (let i = 0; i < 4; i++) {
    console.log(i)
    let guessNumber = prompt("Guess a number");
    if (guessNumber == correctAnswer){
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

function getAnswer7 () {
    let whereLived = ['pennsylvania', 'washington', 'utah', 'delaware'];
    let guessState = prompt ("Can you guess a state I've lived in?").toLowerCase();
    let attempts = 5;

    while(whereLived.indexOf(guessState) == -1 && attempts > 0) {
        alert("That's not correct. Try typing Washington, Pennsylvania, Utah, or Delaware");
        attempts--;
        guessState = prompt ("Can you guess a state I've lived in?").toLowerCase();
    }
        if (whereLived.indexOf(guessState) != -1) {
            alert("That's correct!");
            score++;
    }
}

getAnswer7();
    
alert("Congratulations " + user + "! You got " + score + " out of 7 questions correct.");
