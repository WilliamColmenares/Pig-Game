var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying){
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceDOM = document.querySelector('.dice');
		diceDOM.src = 'dice-' + dice + '.png';
		diceDOM.style.display = 'block';
		if (dice !== 1){
			roundScore += dice;
			document.getElementById('current-' + activePlayer).textContent = roundScore;
			if ((scores[activePlayer] + roundScore) >= 10){
			document.getElementById('name-' + activePlayer).textContent = 'GANADOR';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
			}
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gamePlaying){
		scores[activePlayer] += roundScore;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		nextPlayer();
	}
});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
};

function init(){
	scores = [0, 0]; 
	gamePlaying = true;
	roundScore = 0;
	activePlayer = 0;
	document.getElementById('name-0').textContent = 'Jugador 1';
	document.getElementById('name-1').textContent = 'Jugador 2';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
};

document.querySelector('.btn-new').addEventListener('click', init);
