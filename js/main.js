 /*----- constants -----*/
const words ={
  movies:['interstellar', 'spider man', 'star wars', 'good will hunting', 'the breakfast club', 'inception'],
  music:['drake', 'mac miller', 'kanye west', 'ice cube', 'lady gaga', 'ariana grande'],
  geography: ['united states', 'france', 'japan', 'australia', 'columbia', 'Czechoslovakia'],
  animals: ['kangaroo', 'bald eagle', 'beaver', 'treefrog', 'python', 'dolphin', 'blob fish']
}

  /*----- state variables -----*/
let board = [];
let playerBoard = [];
let guessWord;
let winner = null;
let guessesToGo = 0;


  /*----- cached elements  -----*/
  const boardEl = document.getElementById('board');
  const keysEl = document.querySelector('#keys');
  const winEl = document.getElementById('win-message');
  const imgEl = document.getElementById('img');

  /*----- event listeners -----*/
  document.querySelector('.dropdown-content').addEventListener('click', handleWord);
  keysEl.addEventListener('click', handleKeys);



  /*----- functions -----*/
 function handleWord(evt){
   winner = null;
   guessWord = '';
   playerBoard = [];
   board = [];
   winEl.innerHTML = '';
   boardEl.innerText = '';
   guessesToGo = 0;
   const categorySel = evt.target.innerText.toLowerCase();
   const rndWord = Math.floor(Math.random() * words[categorySel].length);
   guessWord = words[categorySel][rndWord];
   init();
 }

 function handleKeys(evt){
  let keySelect = evt.target.innerHTML;
  let correctkey = 0;
  for(let i = 0; i < board.length; i++){
    if(board[i] === keySelect){
      let letIdx = i;
      playerBoard[letIdx] = keySelect;
      correctkey++;
    }
  }
  if(correctkey === 0){
    guessesToGo++
  }
  if(winner !== false){
    render();
  }
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
    imgEl.style.visibility = 'visible';
    keysEl.style.visibility = 'visible';
  }

  function render(){
    imgEl.src = `img/spaceman-${guessesToGo}.jpg`;
    renderBoard();
    renderMessage();
    checkWin();
  }

  function renderMessage() {
    if(winner){
      winEl.innerHTML = 'You Won! Select a new category to continue!';
    }else if(winner === false){
      winEl.innerHTML = 'You Lost! Select a new category to try again!';
    }
  }

  function checkWin(){
    let letLeft = 0;
    playerBoard.forEach(numLeft =>{
        if(numLeft === '_'){
          letLeft++
        }
    })
    if(letLeft === 0){
      winner = true;
    }

    if(guessesToGo >= 6){
      winner = false
      guessesToGo = 6;
      renderMessage();
    }
  }

  function renderBoard(){
    if(boardEl.innerHTML = "\n      "){
      for(let i = 0; i < playerBoard.length; i++){
      boardEl.innerHTML += playerBoard[i];
      }
    }
  }

