//declare variables
var remainingGuesses = document.getElementById('remaining-guesses') 
var incorrectLetters = document.getElementById('incorrect-letters')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')
var previousWord = document.getElementById('previous-word')

var correct = 0
var incorrect = 0
var win = 0;
var loss = 0;

var indexList = [];
var previousWordList = [];

var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

 



//Select a word at random from "words" array
var random_index = Math.floor(Math.random() * words.length);
var randomWord = words[random_index];


//place it in word to guess element w/ letter replaced with underscores

var wordToGuess = document.querySelector('h2')
wordToGuess.textContent = (randomWord.replace(/[a-z]/g, '_'))

//display 10 remaining guesses in remaining-guesses

var remainingGuesses = document.getElementById('remaining-guesses');remainingGuesses.textContent = (10)

function startGame()
{
  previousWord.textContent = wordToGuess.textContent;
  random_index = Math.floor(Math.random() * words.length);
  randomWord = words[random_index];
  remainingGuesses = document.getElementById('remaining-guesses');remainingGuesses.textContent = (10)
  incorrectLetters.textContent = "";
  wordToGuess = document.querySelector('h2')
  wordToGuess.textContent = (randomWord.replace(/[a-z]/g, '_'))
  console.log("Word: "+randomWord);
}

window.onload = function()
{
  console.log("Word: "+randomWord);
}

//when user guesses a letter, check whether letter is included in the word
document.onkeyup = function(e) {
let getString = wordToGuess.textContent;
//alert(wordToGuess.textContent);
  var key = e.key.toLowerCase()
 if(key.match(/[a-z]/))
 {
  for(let i = 0; i < randomWord.length; i++)
  {//.includes(key) 
    if(wordToGuess.textContent[i] != key&& key == randomWord[i])
    { 
      getString = getString.substring(0,i)+key+getString.substring(i+1); 
      wordToGuess.textContent = str; 
      correct++; 
      //alert("Amount Correct: "+correct)
    }
    else if (wordToGuess.textContent.includes(key) ==false&& i == randomWord.length - 1) //At the end
    {
      incorrect++
      incorrectLetters.textContent += ` ${e.key}`
      remainingGuesses.textContent = (10 - incorrect) 
      if(remainingGuesses.textContent ==("0"))
      {
        startGame();
        loss++;
        losses.textContent = loss;
      }
      break;
    }
    if(correct == randomWord.length)
    {
        win++;
        wins.textContent = win;
        startGame();
    }
  }
  }
  else
  {
    alert("Wrong character");
  }
}
// for (var i = 0; i < randomWord.length; i++) {
// document.onkeyup = function(e) {
// var key = e.key.toLowerCase()
//   // handle correct guess 
// if (randomWord[i]==key) {//If we find a match
//   alert("Index: "+i);
//   // wordToGuess.textContent = randomWord.replace(randomWord, e.key)
//   wordToGuess[i] = key;
//   // handle incorrect guess
// } else {
//   alert("randomWord: "+randomWord+"\nKey: "+key);
//   incorrect++
//   incorrectLetters.textContent += ` ${e.key}`
//   remainingGuesses.textContent = (10 - incorrect) 
// }
// }


// }
// when user gueses whole word correctly, wins should increase by one, next random word should be selected, and previous word should be displayed- reset all other elements


//when remaining guesses are 0, reset to next game and losses should increase








