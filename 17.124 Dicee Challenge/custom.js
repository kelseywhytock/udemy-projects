      function diceRoll() {
          var diceOptions = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
          var randomNumber1 = Math.floor(Math.random() * diceOptions.length);
          var randomNumber2 = Math.floor(Math.random() * diceOptions.length);

          var player1Score = diceOptions[randomNumber1];
          document.querySelector(".img1").setAttribute("src", "images/" + player1Score);

          var player2Score = diceOptions[randomNumber2];
          document.querySelector(".img2").setAttribute("src", "images/" + player2Score);


          if(player1Score > player2Score) {
              document.querySelector("h1").innerHTML = "Player 1 wins!<br />⇦";
          } else if (player1Score === player2Score) {
              document.querySelector("h1").innerHTML = "It's a tie! <br />Re-roll";
          } else {
              document.querySelector("h1").innerHTML = "Player 2 wins!<br />⇨";
          }
      }