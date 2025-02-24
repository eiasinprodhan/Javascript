function valid() {
    let email = document.getElementById("email").value;
    let pattern = /^\S+@\S+\.\S+$/;
    if (pattern.test(email)) {
        document.write("Email Address is Correct");
    }
    else {
        document.write("Email Address is Wrong");
    }
}