const creator = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const text = document.getElementById('carta-texto');
const count = document.getElementById('carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function changeClass() {
  console.log(event.target);
  event.target.className = '';
  event.target.classList.add(style[Math.floor(Math.random() * style.length)], size[Math.floor(Math.random() * size.length)], rotate[Math.floor(Math.random() * rotate.length)], skew[Math.floor(Math.random() * skew.length)]);
}
function countWords() {
  count.innerText = text.value.split(' ').length;
}
function listenAll() {
  const words = document.getElementsByTagName('span');
  for (let i = 0; i < words.length; i += 1) {
    words[i].addEventListener('click', changeClass);
  }
}
function createLetter() {
  letter.innerText = '';
  const letterValue = text.value.split(' ');
  if (text.value == 0) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < letterValue.length; i += 1) {
      const word = document.createElement('span');
      letter.appendChild(word);
      word.innerText = letterValue[i];
      word.classList.add(style[Math.floor(Math.random() * style.length)], size[Math.floor(Math.random() * size.length)], rotate[Math.floor(Math.random() * rotate.length)], skew[Math.floor(Math.random() * skew.length)]);
    }
  }
  listenAll();
  countWords();
}
creator.addEventListener('click', createLetter);
