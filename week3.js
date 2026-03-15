
let age = prompt("Please enter your age:");

if (age !== null) { // Checks if the user didn't hit 'Cancel'
    if (parseInt(age) < 18) {
        alert("Access Denied");
        // This targets an HTML element with the id 'myTextBox'
        document.getElementById("myTextBox").innerText = "You're under age";
    } else {
        alert("Welcome!");
    }
}
