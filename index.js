var previousWord = document.getElementById('previous-word')
//previousWord.textContent = wordToGuess
var incorrectLetters = document.getElementById('incorrect-letters')
var remainingGuesses = document.getElementById('remaining-guesses') 
var wins = document.getElementById('wins') 
var losses = document.getElementById('losses')



var correct = 0
var incorrect = 0

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
var randomWord = words[random_index];


/*place it in word to guess element w/ letter replaced with underscores*/

var wordToGuess = document.querySelector('h2')
var currentWord = (randomWord.replace(/[a-z]/g, '_'))
wordToGuess.textContent = currentWord


/*display 10 remaining guesses in remaining-guesses*/

var remainingGuesses = document.getElementById('remaining-guesses'); remainingGuesses.textContent = (10)

/*when user guesses a letter, check whether letter is included in the word
if yes- replace underscore with letter
if no - incorrect guessed letter should be added to incorrect-letters
- remaining-guesses should reflect one fewer remaining guess*/

document.onkeyup = function(e) {
var key = e.key.toLowerCase()
  // handle correct guess  

 
if (randomWord.includes(key)) 
 { 
  const letters = randomWord.split('') 
  const index = letters.findIndex(letter => letter === key)
  const newWordArray = currentWord.split('')
  newWordArray.splice(index, 1, e.key)
  currentWord = newWordArray.join('')

  console.log(newWordArray.join(''))

  wordToGuess.textContent = currentWord
  correct++
  wins.textContent = correct
  // handle incorrect guess
} else {
  incorrect++
  incorrectLetters.textContent += `${e.key}`
  remainingGuesses.textContent = (10 - incorrect) 
}
}









