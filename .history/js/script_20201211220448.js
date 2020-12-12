var buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();

  var computerMove, playerMove, randomNumber, playerScore, computerScore;
  playerScore==0;
  computerScore==0;

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

  function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      playerScore++;
      printMessage('Brawo! Zdobywasz punkt!');
    }
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      playerScore++;
      printMessage('Brawo! Zdobywasz punkt!');
    }
    else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      playerScore++;
      printMessage('Brawo! Zdobywasz punkt!');
    }
    else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    }
    else {
      computerScore++;
      printMessage('Komputer zdobył punkt!');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);

  if (playerScore==3) {
    printMessage('Koniec gry! Wygrałeś');
    playerScore==0;
    computerScore==0;
  }
  if (computerScore==3) {
    printMessage('Koniec gry! Przegrałeś :(');
    playerScore==0;
    computerScore==0;
  }
  else displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });