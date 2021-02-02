var form = document.getElementById("form");
var submit = document.getElementById("submit");

function formAlert() {
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["location"].value;
    var diet = [];

    if (form.elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements["pescetarian"].checked) {
        diet.push(document.getElementById("pescetarian").value);
    }
    if (form.elements["allergy"].checked) {
        diet.push(document.getElementById("allergy").value);
    }

    alert ("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDiet Restriction: " + diet + "\nThank you for booking your flight with World Travelers Airline!");

    form.reset();
};

submit.addEventListener("click", formAlert);