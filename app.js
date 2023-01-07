const qwerry = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset');
let missed = 0;

let phrases = [ A, B, C, D, E ];

const overlay =getElementById('overlay');
btnReset.addEventListener ('click', () => {
  overlay.style.display = 'hide';
} );