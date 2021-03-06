let input = document.getElementById("text-input");
let button = document.getElementById("btn");
let secret = document.getElementById("secret");
let incorrect = document.getElementById("incorrect-letters");
let hangman = document.getElementById("hangman");
let guessesLeft = document.getElementById("wrong-left")
//list of words from which the word the player will try to guess is pulled.
let words = ["nancy", "greg", "kitten", "nuclear", "kitchen", "sunny", "moonlight", "cookie", "shiny", "fish", "sheep", "silly", "kangaroo", "related", "kick", "bubbles", "bouncy", "offend", "interest", "hound", "lady", "xylophone", "oscar", "airplane", "finger", "morose", "morbid"];
let correctCounter = 0; //this variable will keep track of the number of correct guesses.
//word to be guessed by player
let secretWord = words[Math.floor(Math.random() * words.length)];
let secretArr = secretWord.split("");
let guessesLeftArr = [];
console.log(secretArr);

//replaces elements in secretArr with underscores so player can see how many letters are in each word.
for(let i = 0; i < secretArr.length; i++){
    secretArr[i] = "_"
}

for(let i = 0; i < secretArr.length - 1; i++){
    guessesLeftArr.push("x")
}
guessesLeft.innerText += `Wrong Guesses Left: ${guessesLeftArr.join(" ")}`

function buttonClick() {
    if(input.value.length > 1){
        alert("Just one letter at a time, please!")
    } else if (secretWord.includes(input.value)){
        if(correctCounter < 5){
            correctCounter += 1
        };
        //checks to see if the letter at position i in secretWord is equal to the user input. If it is, the underscore at position i in secretArr is replaced with the user input.
        for(let i = 0; i < secretArr.length; i++){
            if(secretWord[i] === input.value){
                secretArr[i] = input.value;
            }
        }

        
        //this switch case changes the hangman image based upon the number of correct guesses the player has made.
        switch (correctCounter) {
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

        secret.innerText = `Secret Word(${secretArr.length}): ${secretArr.join(" ")}`;
        if(secretArr.join("") === secretWord){
            alert("You win! Your sadistic lust for human death has been sated!...for now.");
            hangman.src = "C:/Users/Owner/Documents/GitHub/Hangman-Game/hangman7-2.png";
            button.removeEventListener("click", buttonClick);
        }
    } else {
        incorrect.innerText += input.value;
        input.value = "";
        guessesLeftArr.pop();
        guessesLeft.innerText = `Wrong Guesses Left: ${guessesLeftArr.join(" ")}`;
        if(guessesLeftArr.length < 1){
            alert("You lose! Now a wife and children get their father back. I hope you're happy.");
            button.removeEventListener("click", buttonClick);
        }
       
       
    }
    input.value = ""
}

secret.innerText = `Secret Word(${secretArr.length}): ${secretArr.join(" ")}`;
button.addEventListener("click", buttonClick, false)