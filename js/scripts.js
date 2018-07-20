//back-end
function Game (player1,player2) {
  this.player1 = player1;
  this.player2 = player2;
}
Game.prototype.players = function() { return this.player1 + " " + this.player2;
}
//front-end
$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var InputtedPlayer1 = $("input#pla1").val();
    var InputtedPlayer2 = $("input#pla2").val();
    var newGame = new Game (InputtedPlayer1,InputtedPlayer2);
    $("#results").append("<li span class ='result'>" + newGame.players + "</span></li>");
    $(".result").last().click(function() {
      $(".player1").text(newGame.player1);
      $(".player2").text(newGame.player2);
    });
    $("input#pla1").val("");
    $("input#pla2").val("");
  });
});
