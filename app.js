const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const heart = document.querySelectorAll('img');
let missed = 0;


let phrases = [
  "happy new year",
  "merry christmas",
  "happy birthday",
  "happy halloween",
  "happy thanksgiving" 
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

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (arr) {

  for (let i = 0; i < phraseArray.length; i++) {
    const li = phraseArray[i];
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
}
addPhraseToDisplay(phraseArray);


const checkLetter = button => {
  const letters = document.querySelectorAll('#phrase li');
  let match = null;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].textContent === button) {   
        letters[i].classList.add('show');   
        match = button;
    }
  } 
  return match;
}

qwerty.addEventListener('click', (e)=> {
  if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen'){
    e.target.classList.add('chosen');
    const letterFound = checkLetter(e.target.textContent);
    if (letterFound === null) {
      heart[missed].src = 'img/lostHeart.png'; 
      missed++;
    }
  }
  checkWin();
})

const checkWin = () => {
  const letterLi = document.getElementsByClassName('letter');
  const showLi = document.getElementsByClassName('show');
  const title = document.querySelector('.title');
  if (letterLi.length === showLi.length){
    overlay.classList.add('win');
    title.innerHTML = "Congrats! You Won!";
    overlay.style.display = 'flex';
  } else if (missed > 4){
    overlay.classList.add('lost');
    title.innerHTML = "Oops! You Lost :(";
    overlay.style.display = 'flex';
  }
}




