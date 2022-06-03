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



/*Select a word at random from "words" array*/
var random_index = Math.floor(Math.random() * words.length);
var obj = words[random_index];


/*place it in word to guess element w/ letter replaced with underscores*/

var wordToGuess = document.querySelector('h2')
wordToGuess.textContent = (obj.replace(/[a-z]/g, '_'))


/*display 10 remaining guesses in remaining-guesses*/

var remainingGuesses = document.getElementById('remaining-guesses');remainingGuesses.textContent = (10)

/*when user guesses a letter, check whether letter is included in the word
if yes- replace underscore with letter
if no - incorrect guessed letter should be added to incorrect-letters
- remaining-guesses should reflect one fewer remaining guess*/


document.onkeyup = function(e) {
var key = e.key.toLowerCase()
wordToGuess.textContent = key + (obj.replace(/[a-z]/g, '_'))
 
}
 
/*
variables 

var wordToGuess = document.getElementById('word-to-guess')
var remainingGuesses = document.getElementById('remaining-guesses') 
var incorrectLetters = document.getElementById('incorrect-letters')
var wins = document.getElementById('wins')
var previousWord = document.getElementById('previous-word')

var correct = 0
var incorrect = 0

*/
