// Random number from 1 to 10
let correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

// Keep asking until correct
while (guess !== correctNumber) {
  guess = parseInt(prompt("Guess a number (1-10):"));
  
  if (guess < correctNumber) {
    console.log("Too low!");
  } else if (guess > correctNumber) {
    console.log("Too high!");
  } else {
    console.log("Correct!");
  }
}