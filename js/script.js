// Deklaracja zmiennych globalnych
var buttonRock, buttonPaper, buttonScissors, buttonTest;
var playerMove, computerMove, randomNumber;

/**
 * Funkcja obsługująca kliknięcie guzika
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  // Pobranie ruchu gracza na podstawie klikniętego przycisku
  playerMove = argButtonName;
  console.log('Ruch gracza to: ' + playerMove);

  // Wylosowanie ruchu komputera
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  // Przypisanie ruchu komputera na podstawie losowania
  computerMove = getMoveName(randomNumber);
  console.log('Ruch komputera to: ' + computerMove);

  // Wyświetlenie wyniku gry
  displayResult(playerMove, computerMove);
}

/**
 * Funkcja wyświetlająca wiadomości na ekranie
 */
function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

/**
 * Funkcja czyszcząca wiadomości
 */
function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

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
    (argPlayerMove == 'papier' && argComputerMove == 'kamień') || 
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

// Przypisanie przycisków do zmiennych
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonTest = document.getElementById('button-test');

// Obsługa kliknięć przycisków
buttonRock.addEventListener('click', function() {
  buttonClicked('kamień');
});

buttonPaper.addEventListener('click', function() {
  buttonClicked('papier');
});

buttonScissors.addEventListener('click', function() {
  buttonClicked('nożyce');
});

// Obsługa guzika TEST
buttonTest.addEventListener('click', function() {
  clearMessages();
  printMessage('Kliknięto guzik TEST! Możesz teraz kontynuować grę.');
  console.log('Kliknięto guzik TEST.');
});
