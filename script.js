let streak = 0;

function playGame(userChoice) {
  const choices = ["rock", "scissors", "paper"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = checkResult(userChoice, computerChoice);

  const gameDiv = document.getElementById("game");
  gameDiv.style.display = "none";

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;

  if (result === "You win!") {
    streak++;
    document.getElementById("continue").style.display = "block";
    document.getElementById("streak").style.display = "block";
    document.getElementById("streak-value").textContent = streak;
  } else if (result !== "It's a tie!") {
    streak = 0;
    document.getElementById("play-again").style.display = "block";
    document.getElementById("streak").style.display = "none";
  } else {
    document.getElementById("continue").style.display = "block";
    document.getElementById("streak").style.display = "block";
    document.getElementById("streak-value").textContent = streak;
  }
}

function resetGame() {
  const gameDiv = document.getElementById("game");
  gameDiv.style.display = "block";

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const playAgainButton = document.getElementById("play-again");
  playAgainButton.style.display = "none";

  const continueButton = document.getElementById("continue");
  continueButton.style.display = "none";
}

function playAgain() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const continueButton = document.getElementById("continue");
  continueButton.style.display = "none";

  const gameDiv = document.getElementById("game");
  gameDiv.style.display = "block";
}

function checkResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
