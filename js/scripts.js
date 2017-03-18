var newGameElem = document.getElementById('js-newGameElement'),
    newGameBtn = document.getElementById('js-newGameButton'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints'),
    playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
  
var gameState = 'notStarted',  //started // ended
    player = {
      name: '',
      score: 0
    },
    computer = {
      name: 'Komputer',
      score: 0
    };

var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

// Sposób wyświetlania poszczególnych sekcji/divów na stronie
// Ustawienie widoku przycisku - nowa gra
// Ustawienie widoku przycisków do wyboru przez gracza
  
function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            playerPickElem.innerText = "Wybór gracza";
            playerResultElem.innerText = "Wynik gracza";
            computerPickElem.innerText = "Wybór komputera";
            computerResultElem.innerText = "Wynik komputera";
        break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';            
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}
  
function newGame() {
    player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints(); 
    }
}
  

 // Aktualne wyniki
  
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}
  
 
// losowanie przez komputer
  
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];

    return possiblePicks[Math.floor(Math.random() * 3)];
}
  
 
  // Przyznawanie punktów
  
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ) {

            winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    } else {
        playerResultElem.innerHTML = computerResultElem.innerHTML = "Remis!";
    }

    setGamePoints();
    checkGameWinner();
}
  
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}
  
function checkGameWinner() {
    if (player.score === 5) {
        alert('Wygrał ' + player.name);
        gameState = "ended";
        setGameElements();
    }

    if (computer.score === 5) {
        alert('Wygrał ' + computer.name);
        gameState = "ended";
        setGameElements();
    }
}

// Wywołanie funkcji na samym początku gry, ukrywającej zbędne elementy na stronie
setGameElements();

// po kliknięciu w button "nowa gra" wywołana zostanie funkcja newGame
newGameBtn.addEventListener('click', newGame); 

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });
