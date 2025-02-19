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