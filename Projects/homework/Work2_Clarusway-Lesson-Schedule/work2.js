const day = prompt("Select a day :");

switch (day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("InClass activities");
        break;
    case "Friday":
        console.log("Teamwork");
        break;
    case "Saturday":
        console.log("InClass + Workshop")
        break;
    case "Sunday":
        console.log("Self Study")
    default:
        console.log("Please enter the weekday correctly. Make sure that the first letter of the weekday is capitilized.")
        break;
}