
  function startGame() {

      let userChoice = document.getElementById("user-choice").value.toLowerCase();
      let items = ["snake", "water", "gun"];
      let computerChoice = items[Math.floor(Math.random() * 3)];
      let changingText = document.getElementById("game-para")

      if (items.includes(userChoice)) {
        if (userChoice === computerChoice) {
          changingText.textContent = `You chose ${userChoice} and Computer chose ${computerChoice}. It's a draw!`;
        } else if (
          (userChoice === "snake" && computerChoice === "water") ||
          (userChoice === "water" && computerChoice === "gun") ||
          (userChoice === "gun" && computerChoice === "snake")
        ) {

          changingText.textContent = `You chose ${userChoice} and Computer chose ${computerChoice}. You win!`;

          

        } else {
          changingText.textContent = `You chose ${userChoice} and Computer chose ${computerChoice}. Computer wins!`;
         
        }

      } else {
        changingText.textContent = "Enter a valid Choice"
    
      }

     
    }
  
 