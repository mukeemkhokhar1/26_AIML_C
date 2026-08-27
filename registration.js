let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your valid name");
        return;
    }


    
    let email = document.getElementById("email").value;

    if (
        email === "" ||
        !email.includes("@") ||
        !email.includes(".")
    ) {
        alert("Please enter your valid email");
        return;
    }



    let password = document.getElementById("password").value;

    if (password === "" || password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }


    
    let rePassword = document.getElementById("rePassword").value;

    if (rePassword === "") {
        alert("Please re-enter password");
        return;
    }

    if (password !== rePassword) {
        alert("Password does not match");
        return;
    }


    
    let mobile = document.getElementById("mobile").value;

    if (mobile === "" || mobile.length !== 10) {
        alert("Please enter valid mobile number");
        return;
    }


    
    alert("Registration Successful!");

});