

function getAnswer1 (){
    let guessFruit;
    do {
        guessFruit = prompt("Is my favorite fruit a watermelon?").toLowerCase();
        if (guessFruit != "yes") {
            alert("That's incorrect, please guess again")
        } else {
            document.write("That's corret!");
        }

    } while (guessFruit != "yes")
}

getAnswer2();

function getAnswer2 (){
    let guessColor;
    do {
        guessColor = prompt("Is my favorite color red?").toLowerCase();
        if (guessColor != "no") {
            alert("That's incorrect, please guess again")
        } else {
            document.write("That's corret!");
        }

    } while (guessColor != "no")
}

getAnswer2();


