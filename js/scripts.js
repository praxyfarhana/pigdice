//back-end
function Game (player1,player2) {
  this.player1 = player1;
  this.player2 = player2;
}

//front-end
$(document).ready(function() {
  $("form#game").submit(function(event) {
    var InputtedPlayer1 = $("input#pla1").val();
    var InputtedPlayer2 = $("inpit#pla2").val();
    var newGame = new Game (InputtedPlayer1,InputtedPlayer2)

  });
});
