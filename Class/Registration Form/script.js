function showForm(event) {
    event.preventDefault();
    let fullName = document.getElementById("fullName").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let password = document.getElementById("password").value;
    let gender = document.querySelector("input[type=radio]:checked").value;
    let subject = document.getElementById("subject").value;
    let hobbies = document.querySelectorAll("input[type=checkbox]:checked");
    let address = document.getElementById("address").value;

    let hobbiesList = [];

    for(let i = 0; i < hobbies.length; i++){
        hobbiesList.push(hobbies[i].value);
    }

    let output = "<b>Full Name: </b>" + fullName + "<br/>"
    + "<b>Email Address: </b>" + emailAddress + "<br/>"
    + "<b>Password: </b>" + password + "<br/>"
    + "<b>Gender: </b>" + gender + "<br/>"
    + "<b>Subject: </b>" + subject + "<br/>"
    + "<b>Hobbies: </b>" + hobbiesList + "<br/>"
    + "<b>Address: </b>" + address;

    let newWindow = window.open("", "_blank");
    newWindow.document.write("<pre>" + output +"</pre>");
}

let form = document.getElementById("formData");
form.addEventListener("submit", showForm)

function checkEmail(event) {
    let emailAddress = document.getElementById("emailAddress").value;
    let pattern = /^\S+@\S+\.\S+$/;

    if (pattern.test(emailAddress)) {
        document.getElementById("emailMessage").innerHTML = "<span style='color:green'>Valid email address.</span>";
    }
    else {
        document.getElementById("emailMessage").innerHTML = "<span style='color:red'>Invalid email address.</span>";
    }
}

function checkPassword(event) {
    let password = document.getElementById("password").value;
    let pattern1 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (pattern1.test(password)) {
        document.getElementById("passwordMessage").innerHTML = "<span style='color:green'>Your Password is Strong</span>";
    }
    else {
        document.getElementById("passwordMessage").innerHTML = "<span style='color:red'><small>(Password must be at least 8 characters and must contain at least one capital letter, small letter, number and special characters.)</small></span>";
    }
}