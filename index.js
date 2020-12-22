let input = document.getElementById("text-input");
let button = document.getElementById("btn");
let secret = document.getElementById("secret");
let incorrect = document.getElementById("incorrect-letters");
let hangman = document.getElementById("hangman");
//list of words from which the word the player will try to guess is pulled.
let words = ["nancy", "greg", "kitten", "nuclear", "kitchen", "sunny", "moonlight", "cookie", "fish", "sheep", "kangaroo", "related", "kick", "bubbles", "bouncy", "offend", "interest", "hound"];
let incorrectCounter = 0; //this variable will keep track of the number of incorrect guesses.
//word to be guessed by player
let secretWord = words[Math.floor(Math.random() * words.length)];
let secretArr = secretWord.split("");
console.log(secretArr);

secret.innerText = `Secret Word(${secretWord.length}): `;
button.addEventListener("click", ()=> {
    if(input.value.length > 1){
        alert("Just one letter at a time, please!")
    } else if (secretWord.includes(input.value)){
        alert("That's in secretWord!") //placeholder to test functionality.
        secret.innerText += secretArr.filter(x => x === input.value).join("");
        console.log(secretArr.filter(x => x === input.value))
    } else {
        alert("That's not in secretWord!"); //placeholder to test functionality.
        incorrect.innerText += input.value;
        input.value = "";
        incorrectCounter += 1;
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
                break;
        }
    }
    input.value = ""
}, false)