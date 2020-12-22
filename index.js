let input = document.getElementById("text-input");
let button = document.getElementById("btn");
let secret = document.getElementById("secret");
//list of words from which the word the player will try to guess is pulled.
let words = ["nancy", "greg", "kitten", "nuclear", "kitchen", "sunny", "moonlight", "cookie", "fish", "sheep", "kangaroo", "related", "kick", "bubbles", "bouncy", "offend", "interest", "hound"];
//word to be guessed by player
let secretWord = words[Math.floor(Math.random() * words.length)];

secret.innerHTML = secretWord;

button.addEventListener("click", ()=> {
    if(input.value.length > 1){
        alert("Just one letter at a time, please!")
    } else if (secretWord.includes(input.value)){
        alert("That's in secretWord!") //placeholder to test functionality.
    } else {
        alert("That's not in secretWord!") //placeholder to test functionality.
    }
    input.value = ""
}, false)