function submitForm() {
    let nameU = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let remarks = document.getElementById("remarks").value;
    let sex = document.querySelector("input[type=radio]:checked");
    let subjects = document.querySelectorAll("input[type=checkbox]:checked");
    let location = document.getElementById("location").value;

    let subjectsList=[];

    for(let i = 0; i<subjects.length; i++){
        subjectsList.push(subjects[i].value);
    }

    let output = "Name: " + nameU + "<br/>"
    + "Contact: " + contact + "<br/>"
    + "Remarks: " + remarks + "<br/>"
    + "Sex: " + sex.value + "<br/>"
    + "Subjects: " + subjectsList + "<br/>"
    + "Location: " + location;

    let newWindow = window.open("", "_blank");
    newWindow.document.write(output);
}