let buttonRock,
    buttonPaper,
    buttonScissors,
    playerScore=0,
    computerScore=0;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();

  let computerMove, playerMove, randomNumber;

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }

  function endGame(){
    playerScore=0;
    document.getElementById('player').innerHTML = playerScore;
    computerScore=0;
    document.getElementById('computer').innerHTML = computerScore;
  }

  function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        playerScore++;
        document.getElementById('player').innerHTML = playerScore;
        if (playerScore == 3) {
          printMessage('Koniec gry! Wygrałeś');
        }
        else {
          printMessage('Brawo! Zdobywasz punkt!');
        }
    }
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        playerScore++;
        document.getElementById('player').innerHTML = playerScore;
        if (playerScore == 3) {
          printMessage('Koniec gry! Wygrałeś');
        }
        else {
          printMessage('Brawo! Zdobywasz punkt!');
        }
    }
    else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        playerScore++;
        document.getElementById('player').innerHTML = playerScore;
        if (playerScore == 3) {
          printMessage('Koniec gry! Wygrałeś');
        }
        else {
          printMessage('Brawo! Zdobywasz punkt!');
        }
    }
    else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    }
    else {
        computerScore++;
        document.getElementById('computer').innerHTML = computerScore;
        if (computerScore == 3) {
          printMessage('Koniec gry! Przegrałeś :(');
        }
        else {
          printMessage('Komputer zdobywa punkt!');
        }
    }
    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });