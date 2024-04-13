document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("previous").addEventListener("click", function(){
        window.location.href = "#";
    });

    document.getElementById("next").addEventListener("click", function(){
        window.location.href = "#";
    });

    // var regBtn = document.getElementById("registerBtn");
    // if(regBtn){
    //     regBtn.addEventListener("click",function(){
    //         window.location.href = "login.html";
    //     });
    // }
})

document.addEventListener("DOMContentLoaded", function() {

    var nextButton = document.getElementById("nextButton");
    if (nextButton) {
        nextButton.addEventListener("click", function() {
            window.location.href = "page2.html";
        });
    }

    var nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
        nextBtn.addEventListener("click", function() {
            window.location.href = "register.html";
        });
    }

    var registerBtn = document.getElementById("registerBtn");
    if (registerBtn) {
        registerBtn.addEventListener("click", function() {
            window.location.href = "login.html";
        });
    }

    var loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            window.location.href = "goals.html";
        });
    }

    var confirmButton = document.getElementById("confirmButton");
    if (confirmButton) {
        confirmButton.addEventListener("click", function() {
            window.location.href = "tracker.html";
        });
    }

    var backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function() {
            window.location.href = "goals.html";
        });
    }

    var backBtn = document.getElementById("backBtn");
    if (backBtn) {
        backBtn.addEventListener("click", function() {
            window.location.href = "tracker.html";
        });
    }

    var previous = document.getElementById("previous");
    if (previous) {
        previous.addEventListener("click", function() {
            window.location.href = "#";
        });
    }

    var next = document.getElementById("next");
    if (next) {
        next.addEventListener("click", function() {
            window.location.href = "#";
        });
    }
});