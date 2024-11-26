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
