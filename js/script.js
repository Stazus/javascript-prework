function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Funkcja rozpoznaje ruch na podstawie ID.
 */
function getMoveName(argMoveId) {
  console.log('Wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień'; // Zabezpieczenie w razie błędnego ruchu
  }
}

/**
 * Funkcja rozstrzyga wynik gry na podstawie ruchów gracza i komputera.
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('Wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);

  if (
    (argPlayerMove == 'papier' && argComputerMove == 'kamień') || // operator logiczny "lub" - sprawdzenie wszystkich przypadków, w których gracz wygrywa; gdyby go nie było, trzeba by było napisać osobne instrukcje if dla każdego warunku
    (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || 
    (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
  ) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

// Pobranie ruchu gracza
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wybór ruchu gracza to: ' + playerInput);

// Przypisanie ruchu gracza na podstawie wyboru
playerMove = getMoveName(playerInput);
console.log('Ruch gracza to: ' + playerMove);

// Wylosowanie ruchu komputera
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

// Przypisanie ruchu komputera na podstawie losowania
computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove);

// Wyświetlenie wyniku gry
displayResult(playerMove, computerMove);
