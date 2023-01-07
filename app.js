const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

let phrases = [ A, B, C, D, E ];

btnReset.addEventListener ('click', () => {
  overlay.style.display = 'none';
} );
