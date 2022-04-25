var player, winner = null;
var selectedPlayer = document.getElementById('currentPlayer');
var winnerPlayer = document.getElementById('winnerPlayer');

const startRandom = () => {
    var player = Math.floor(Math.random() * 2);
    if (player == 0) {
        changePlayer('X');
    }
    else {
        changePlayer('O');
    }
    return player;
}
startRandom();

function getColumn(id) {
    if (winner !== null) {
        return;
    }

    var square = document.getElementById(id);
    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000000';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    changePlayer(player);
    checkWinner();
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner(){
    var firstSquare = document.getElementById(1);
    var secondSquare = document.getElementById(2);
    var thirdSquare = document.getElementById(3);
    var fourthSquare = document.getElementById(4);
    var fifthSquare = document.getElementById(5);
    var sixthSquare = document.getElementById(6);
    var seventhSquare = document.getElementById(7);
    var eighthSquare = document.getElementById(8);
    var ninthSquare = document.getElementById(9);

    if (checkSequence(firstSquare, secondSquare, thirdSquare)) {
        changeColor(firstSquare, secondSquare, thirdSquare);
        changeWinner(firstSquare);
        return;
    }

    if (checkSequence(fourthSquare, fifthSquare, sixthSquare)) {
        changeColor(fourthSquare, fifthSquare, sixthSquare);
        changeWinner(fourthSquare);
        return;
    }

    if (checkSequence(seventhSquare, eighthSquare, ninthSquare)) {
        changeColor(seventhSquare, eighthSquare, ninthSquare);
        changeWinner(seventhSquare);
        return;
    }

    if (checkSequence(firstSquare, fourthSquare, seventhSquare)) {
        changeColor(firstSquare, fourthSquare, seventhSquare);
        changeWinner(firstSquare);
        return;
    }

    if (checkSequence(secondSquare, fifthSquare, eighthSquare)) {
        changeColor(secondSquare, fifthSquare, eighthSquare);
        changeWinner(secondSquare);
        return;
    }

    if (checkSequence(thirdSquare, sixthSquare, ninthSquare)) {
        changeColor(thirdSquare, sixthSquare, ninthSquare);
        changeWinner(thirdSquare);
        return;
    }

    if (checkSequence(firstSquare, fifthSquare, ninthSquare)) {
        changeColor(firstSquare, fifthSquare, ninthSquare);
        changeWinner(firstSquare);
        return;
    }

    if (checkSequence(thirdSquare, fifthSquare, seventhSquare)) {
        changeColor(thirdSquare, fifthSquare, seventhSquare);
        changeWinner(thirdSquare);
    }
}

function changeWinner(square) {
    winner = square.innerHTML;
    winnerPlayer.innerHTML = winner;
}

function changeColor(firstSquare, secondSquare, thirdSquare) {
    firstSquare.style.background = '#008000';
    secondSquare.style.background = '#008000';
    thirdSquare.style.background = '#008000';
}

function checkSequence(firstSquare, secondSquare, thirdSquare) {
    var equal = false;

    if (firstSquare.innerHTML !== '-' && firstSquare.innerHTML === secondSquare.innerHTML && secondSquare.innerHTML === thirdSquare.innerHTML) {
        equal = true;
    }

    return equal;
}
