 /*----- constants -----*/
const words ={
  movies:['interstellar', 'spider man', 'star wars', 'good will hunting'],
  music:['drake', 'mac miller', 'kanye west', 'ice cube'],
  geography: ['united states', 'france', 'japan', 'australia'],
  animals: ['kangaroo', 'bald eagle', 'beaver', 'treefrog']
}

  /*----- state variables -----*/
let board = [];
let playerBoard = [];
let guessWord;
let winner = null;

  /*----- cached elements  -----*/
  const boardEl = document.getElementById('board');

  /*----- event listeners -----*/
  document.querySelector('.dropdown-content').addEventListener('click', handleWord);


  /*----- functions -----*/
 function handleWord(evt){
  guessWord = '';
  playerBoard = [];
  board = [];
  boardEl.innerText = '';
  const categorySel = evt.target.innerText.toLowerCase();
  const rndWord = Math.floor(Math.random() * words[categorySel].length);
  guessWord = words[categorySel][rndWord];
  init();
 }

  function init() {
    for(let i = 0; i < guessWord.length; i++){
      board.push(guessWord.charAt(i));
    }

    for(let i = 0; i < guessWord.length; i++){
      if(guessWord.charAt(i) === ' '){
        playerBoard.push(' ');
      } else {
        playerBoard.push('_');
      }
    }
    render();
  }

  function render(){
    renderBoard();
  }

  function renderBoard(){
    for(let i = 0; i < playerBoard.length; i++){
    boardEl.innerHTML += playerBoard[i];
    }
  }

