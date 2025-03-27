    const form = document.getElementById("newsletter-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nameValue === "" || emailValue === "") {
            errorMessage.textContent = "Both name and email are required!";
        } else if (!emailPattern.test(emailValue)) {
            errorMessage.textContent = "Please enter a valid email address!";
        } else {
            errorMessage.textContent = "";
            alert("Thank you for signing up!");
            nameInput.value = "";
            emailInput.value = "";
        }
    });

    // Reset form når "Cancel" trykkes
    document.querySelector(".cancel-btn").addEventListener("click", function () {
        nameInput.value = "";
        emailInput.value = "";
        errorMessage.textContent = "";
    });
