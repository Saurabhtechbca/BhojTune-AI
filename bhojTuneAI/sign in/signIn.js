document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");
    const backToHome = document.getElementById("backToHome");

    // Check if login form exists before adding event listener
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email === "" || password === "") {
                errorMessage.textContent = "All fields are required!";
                return;
            }

            // Simulate successful login (Replace with actual authentication later)
            errorMessage.textContent = "";
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard/homepage
        });
    } else {
        console.error("Login form not found!");
    }

    // Handle Back to Home Redirection
    if (backToHome) {
        backToHome.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "bhojj.htmk"; // Ensure bhoj.html exists
        });
    } else {
        console.error("Back to Home button not found!");
    }
});
