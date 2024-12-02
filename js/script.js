// Deklaracja zmiennych globalnych
var buttonRock, buttonPaper, buttonScissors, buttonTest;
var playerMove, computerMove, randomNumber;

// Liczniki wygranych gracza i komputera
var playerWins = 0;
var computerWins = 0;

/**
 * Funkcja obsługująca kliknięcie guzika
 */
function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    // Pobranie ruchu gracza na podstawie klikniętego przycisku
    playerMove = argButtonName;

    // Wylosowanie ruchu komputera
    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = getMoveName(randomNumber);

    // Wyświetlenie wyniku gry
    displayResult(playerMove, computerMove);

    // Aktualizacja wyniku
    updateResult();
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
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        return 'kamień';
    }
}

/**
 * Funkcja rozstrzyga wynik gry na podstawie ruchów gracza i komputera.
 */
function displayResult(argPlayerMove, argComputerMove) {
    if (
        (argPlayerMove == 'papier' && argComputerMove == 'kamień') || 
        (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || 
        (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
    ) {
        printMessage('Wygrywasz!');
        playerWins++; // Gracz wygrywa rundę
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz :(');
        computerWins++; // Komputer wygrywa rundę
    }

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

/**
 * Funkcja aktualizuje wynik wyświetlany na ekranie.
 */
function updateResult() {
    // Pobranie elementu "result" i aktualizacja jego tekstu
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = playerWins + ' - ' + computerWins;
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
