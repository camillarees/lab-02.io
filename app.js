
let user = prompt('What is your name?');
console.log('Welcome ' + user)

function getAnswer1 (){
    'use strict';
    let guessFruit;
    do {
        guessFruit = prompt("Is my favorite fruit a watermelon?").toLowerCase();
        if (guessFruit != "yes") {
            alert("That's incorrect, please guess again")
        } else {
            document.write("That's correct!");
        }

    } while (guessFruit != "yes")
}

getAnswer1();

function getAnswer2 (){
    'use strict';
    let guessColor;
    do {
        guessColor = prompt("Is my favorite color red?").toLowerCase();
        if (guessColor != "no") {
            alert("That's incorrect, please guess again")
        } else {
            document.write("You're right. My favorite color is actually blue.");
        }

    } while (guessColor != "no")
}

getAnswer2();

function getAnswer3 (){
    'use strict';
    let guessFlower;
    do {
        guessFlower = prompt("Is my favorite flower a rose?").toLowerCase();
        if (guessFlower != "yes") {
            alert("Sorry, you guessed wrong! Try again!")
        } else {
            document.write("Yeah it's not a rose. I actually love lilacs and peonies.");
        }

    } while (guessFlower != "yes")
}

getAnswer3();

function getAnswer4 (){
    'use strict';
    let guessIcecream;
    do {
        guessIcecream = prompt("Is my favorite ice cream salted caramel?").toLowerCase();
        if (guessIcecream != "yes") {
            alert("Hm, that's not right. Try again buddy!")
        } else {
            document.write("YES! I love salted caramel");
        }

    } while (guessIcecream != "yes")
}

getAnswer4();


