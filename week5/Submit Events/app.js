document.body.style.textAlign = "center";
document.body.style.backgroundColor = "wheat";

var form = document.getElementById("form");
var submitIt = document.getElementById("submit");

function newAlert() {

    var fullName = form.elements["fullName"].value;
    var email = form.elements["email"].value;
    var phone = form.elements["phone"].value;

    alert ("Thank you for joining our Rewards Program " + "\nFull Name: " + fullName + "\nEmail: " + email + "\nPhone Number: " + phone);

    form.reset();
};

submitIt.addEventListener("click", newAlert);