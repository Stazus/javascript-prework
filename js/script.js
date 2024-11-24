function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove;
computerMove = "kamień";
printMessage("Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!");

var playerMove;
playerMove = "papier";
printMessage("Zagrałem " + playerMove + "! Jeśli Twój ruch to papier, to wygrywasz!");

