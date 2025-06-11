const suits = ['♥', '♦', '♣', '♠'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCard() {
  const suit = getRandomElement(suits);
  const value = getRandomElement(values);
  const isRed = suit === '♥' || suit === '♦';

  // Elementos DOM
  document.getElementById('cardValue').textContent = value;
  document.getElementById('topSuit').textContent = suit;
  document.getElementById('bottomSuit').textContent = suit;

  // Color del símbolo
  const top = document.getElementById('topSuit');
  const bottom = document.getElementById('bottomSuit');

  if (isRed) {
    top.classList.add('red');
    bottom.classList.add('red');
  } else {
    top.classList.remove('red');
    bottom.classList.remove('red');
  }
}

generateCard();