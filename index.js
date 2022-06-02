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


/*var firstH = document.querySelector('h2')
firstH.innerHTML = words

var wordToGuess = document.querySelector('h2 > ')
wordToGuess.textContent = ('_____')*/

/*Select a word at random from "words" array*/
var random_index = Math.floor(Math.random() * 11);
var obj = words[random_index];


/*place it in word to guess element w/ letter replaced with underscores*/

var wordToGuess = document.querySelector('h2')
wordToGuess.textContent = (obj.replace(/[a-z]/g, '_'))


/*display remaining guesses in remaining-guesses*/

/*var wordToGuess = document.getElementById('word-to-guess')
var remainingGuesses = document.getElementById('remaining-guesses') 
var incorrectLetters = document.getElementById('incorrect-letters')
var wins = document.getElementById('wins')
var previousWord = document.getElementById('previous-word')

var correct = 0
var incorrect = 0

document.onkeyup = function(e) {
console.log(e.key)
}

var word = math.random() * words.length <left off here
resetBtn.onclick = function() {

}*/
