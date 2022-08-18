/*
Bank Account Loing 
===========================
*/
let login = document.getElementById("login");

login.addEventListener("click", function () {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value === "mzhdipu@gmail.com" && password.value === "mzhdipu") {
        window.location.href = "account.html"
    } else {
        alert("Invail !! Please Check your email & Password")
    }
})
