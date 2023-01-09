const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

let phrases = [
  "Happy New Year",
  "Merry Christmas",
  "Happy Birthday",
  "Happy Halloween",
  "Happy Thanksgiving" 
];

btnReset.addEventListener ('click', () => {
  overlay.style.display = 'none';
} );

function getRandomPhraseAsArray (arr){
  const randomNumber = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases (randomNumber);
  const phraseAsCharacters = randomPhrase.split(' ');
  return phraseAsCharacters;
}

const phraseArray = getRandomPhraseAsArray(phrases);
document.addPhrasetoDisplay(phraseArray);

function addPhraseToDisplay (arr) {

  for ()

  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild (li); 
  li.classList.add("letter");
  return getRandomPhraseAsArray;
  
   


}