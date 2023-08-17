// Symbols for the cards
let symbols = ['♠', '♥', '♦', '♣', '★', '☀', '☁', '☂'];

// Get the game board element
let gameBoard = document.getElementById('game-board');

// Shuffle the symbols array randomly
function shuffleArray(array) {
  let shuffledArray = [];
  while (array.length > 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    shuffledArray.push(array.splice(randomIndex, 1)[0]);
  }
  return shuffledArray;
}

// Create a card element with a symbol
function createCard(symbol) {
  let card = document.createElement('div');
  card.className = 'card';
  card.textContent = symbol;
  return card;
}

// Create the game board with shuffled symbols
function createGameBoard() {
  let shuffledSymbols = shuffleArray(symbols.concat(symbols));

  for (let symbol of shuffledSymbols) {
    let card = createCard(symbol);
    gameBoard.appendChild(card);
  }
}

// Call the function to create the game board
createGameBoard();
