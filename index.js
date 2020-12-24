let input = document.getElementById("text-input");
let button = document.getElementById("btn");
let secret = document.getElementById("secret");
let incorrect = document.getElementById("incorrect-letters");
let hangman = document.getElementById("hangman");
//list of words from which the word the player will try to guess is pulled.
let words = ["nancy", "greg", "kitten", "nuclear", "kitchen", "sunny", "moonlight", "cookie", "shiny", "fish", "sheep", "silly", "kangaroo", "related", "kick", "bubbles", "bouncy", "offend", "interest", "hound", "lady", "xylophone", "oscar", "airplane", "finger", "morose", "morbid"];
let incorrectCounter = 0; //this variable will keep track of the number of incorrect guesses.
//word to be guessed by player
let secretWord = words[Math.floor(Math.random() * words.length)];
let secretArr = secretWord.split("");
console.log(secretArr);

//replaces elements in secretArr with underscores so player can see how many letters are in each word.
for(let i = 0; i < secretArr.length; i++){
    secretArr[i] = "_"
}

function buttonClick() {
    if(input.value.length > 1){
        alert("Just one letter at a time, please!")
    } else if (secretWord.includes(input.value)){
        //checks to see if the letter at position i in secretWord is equal to the user input. If it is, the underscore at position i in secretArr is replaced with the user input.
        for(let i = 0; i < secretArr.length; i++){
            if(secretWord[i] === input.value){
                secretArr[i] = input.value;
            }
        }
        secret.innerText = `Secret Word(${secretArr.length}): ${secretArr.join(" ")}`;
        if(secretArr.join("") === secretWord){
            alert("You win! Now we just need to reform our cruel and unusual death sentencing procedures!");
            button.removeEventListener("click", buttonClick);
        }
    } else {
        incorrect.innerText += input.value;
        input.value = "";
        incorrectCounter += 1;
        //this switch case changes the hangman image based upon the number of incorrect guesses the player has made.
        switch (incorrectCounter) {
            case 1:
                hangman.src = "C:/Users/Owner/Documents/GitHub/Hangman-Game/hangman2.png";
                break;
            case 2:
                hangman.src = "C:/Users/Owner/Documents/GitHub/Hangman-Game/hangman3.png";
                break;
            case 3:
                hangman.src = "C:/Users/Owner/Documents/GitHub/Hangman-Game/hangman4.png";
                break;
            case 4:
                hangman.src = "C:/Users/Owner/Documents/GitHub/Hangman-Game/hangman5.png";
                break;
            case 5:
                hangman.src = "C:/Users/Owner/Documents/GitHub/Hangman-Game/hangman6.png";
                break;
            case 6:
                hangman.src = "C:/Users/Owner/Documents/GitHub/Hangman-Game/hangman7.png";
                alert("You lost the word guessing game! And therefore, this man will now be executed... for some reason.");
                secret.innerText = `Secret Word(${secretArr.length}): ${secretWord.split("").join(" ")}`;
                button.removeEventListener("click", buttonClick);
                break;
        }
    }
    input.value = ""
}

secret.innerText = `Secret Word(${secretArr.length}): ${secretArr.join(" ")}`;
button.addEventListener("click", buttonClick, false)