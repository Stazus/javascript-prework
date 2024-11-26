function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, randomNumber;

// Wylosowanie liczby od 1 do 3
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

// Przypisanie ruchu komputera na podstawie wylosowanej liczby
if (randomNumber === 1) {
  computerMove = 'kamień';
} else if (randomNumber === 2) {
  computerMove = 'papier';
} else if (randomNumber === 3) {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch'; 
}

// Wyświetlenie ruchu komputera
printMessage('Mój ruch: ' + computerMove);



// Pobranie wyboru od gracza
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);

// Logika przypisywania ruchu gracza
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  // Obsługa błędnego wyboru
  printMessage('Błędny wybór! Założono, że chciałeś wybrać "kamień".');
  playerMove = 'kamień';
}

// Wyświetlenie ruchu gracza
printMessage('Twój ruch: ' + playerMove);

