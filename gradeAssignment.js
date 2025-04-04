// Ask for the user's grade
let score = parseInt(prompt("Enter your grade:"));

// Check grade category
if (score >= 90) {
  console.log("Your grade is Excellent.");
} else if (score >= 80) {
  console.log("Your grade is Good.");
} else if (score >= 70) {
  console.log("Your grade is Fair.");
} else if (score >= 60) {
  console.log("Your grade is Needs Improvement.");
} else {
  console.log("Your grade is Failed.");
}