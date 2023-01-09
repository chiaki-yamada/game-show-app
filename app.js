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
  const randomPhrase = phrases [randomNumber];
  const phraseAsCharacters = randomPhrase.split('');
  return phraseAsCharacters;
}

function addPhraseToDisplay (arr) {

  for (let i = 0; i < phrases.length; i++) {
    const li = phrases[i];
    const liPhrase = document.createElement('li');
    liPhrase.textContent = li;
    const ul = document.querySelector('#phrase ul');
    ul.appendChild (liPhrase); 

    if (li !== " ") {
      liPhrase.classList.add('letter');
    } else if (li === " ") {
      liPhrase.classList.add('space');
    }
  }
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
}