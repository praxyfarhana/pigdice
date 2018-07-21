//business logic
function Game(player1,player2) {
  this.player1;
  this.player2;
}

var turn = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.ascore = 0;
  this.totalscore = 0;
  this.playerName;
}

Player.prototype.Roll = function() {
  if (this.roll === 1) {
    this.ascore = 0;
    alert(this.playerName + ",oops 1?!")

  } else {
    this.ascore += this.roll;
  }
}

Player.prototype.Hold = function() {
  this.totalscore += this.ascore;
  this.ascore = 0;
  alert(this.playerName + "pliz next its over!");
}

Player.prototype.won = function() {
  if (this.totalscore >= 100) {
    alert(this.playerName + "hooray!");
  }
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.ascore = 0;
  this.totalscore = 0;
  this.playerName = "playerName";
}

// User Interface
$(document).ready(function() {

  $("button#play").click(function(event) {
    player1 = new Player();
    player2 = new Player();

    var player1Name = $(".pla1").val();
    var player2Name = $(".pla2").val();

    $("#pla1").text(player1Name);
    $("#pla2").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;

  });

  $("button#roll1").click(function(event) {
    player1.roll = turn();
    $("#die1").text(player1.roll);
    player1.Roll();
    $("#total-1").text(player1.ascore);
  });

  $("button#roll2").click(function(event) {
    player2.roll = turn();
    $("#die2").text(player2.roll);
    player2.Roll();
    $("#total-2").text(player2.ascore);
  });

  $("button#hold1").click(function(event) {
    player1.Hold();
    $("#score-1").text(player1.totalscore);
    $("#total-1").val();
    $("#die1").val();
    player1.won();
  });

  $("button#hold2").click(function(event) {
    player2.Hold();
    $("#score-2").text(player2.totalscore);
    $("#total-2").val();
    $("#die2").val();
    player2.won();
  });

});
