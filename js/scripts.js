var newGameElem = document.getElementById('js-newGameElement'),
    newGameBtn = document.getElementById('js-newGameButton'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

// Sposób wyświetlania poszczególnych sekcji/divów na stronie
// Ustawienie widoku przycisku - nowa gra
// Ustawienie widoku przycisków do wyboru przez gracza

function setGameElements() {
    switch (gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
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

// FUNKCJA - do ustawiania nowej gry:
// wpisania nazwy użytkownika, 
// wyzerowania tablicy z wynikami

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// Wywołanie funkcji na samym początku gry, ukrywającej zbędne elementy na stronie
setGameElements();


function newGame() {
    player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints(); // ta funkcja jeszcze nie powstała
    }
}

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');




var newGameBtn = document.getElementById('js-newGameButton');
// po kliknięciu w button "nowa gra" wywołana zostanie funcka newGame
newGameBtn.addEventListener('click', newGame); 



function playerPick(playerPick) {
    console.log(playerPick);
}



var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

    pickRock.addEventListener('click', function() { playerPick('rock') });
    pickPaper.addEventListener('click', function() { playerPick('paper') });
    pickScissors.addEventListener('click', function() { playerPick('scissors') });



// Aktualne wyniki

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}


// Umieszczenie rezultaty na stronie 

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

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
    }

}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}

