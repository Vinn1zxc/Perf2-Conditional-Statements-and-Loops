// Ask for the day of the week
let day = prompt("Enter a day of the week:").toLowerCase();

// Check what task to do
switch (day) {
    case "monday":
        console.log("Finish your assignments.");
        break;
    case "tuesday":
        console.log("Attend group meeting.");
        break;
    case "wednesday":
        console.log("Study for exams.");
        break;
    case "thursday":
        console.log("Work on your project.");
        break;
    case "friday":
        console.log("Review your lessons.");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy your weekend!");
        break;
    default:
        console.log("Invalid day.");
}