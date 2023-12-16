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
  document.querySelector('#keys').addEventListener('click', handleKeys);



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

 function handleKeys(evt){
  let keySelect = evt.target.innerHTML;
  for(let i = 0; i < board.length; i++){
    if(board[i] === keySelect){
      let letIdx = i;
      playerBoard[letIdx] = keySelect;
    }
  }
  render();
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
    console.log(boardEl.innerHTML)
    if(boardEl.innerHTML = "\n      "){
      for(let i = 0; i < playerBoard.length; i++){
      boardEl.innerHTML += playerBoard[i];
      }
    }

    
  }

