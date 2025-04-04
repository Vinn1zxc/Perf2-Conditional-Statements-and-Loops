// Set correct password
const correctPassword = "Vin185";
let userInput;

// Keep asking until correct password is entered
do {
  userInput = prompt("Enter password:");
  if (userInput !== correctPassword) {
    console.log("Wrong password. Try again.");
  }
} while (userInput !== correctPassword);

console.log("Access granted.");