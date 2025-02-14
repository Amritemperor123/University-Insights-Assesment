document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("application-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let isValid = true;
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phonePattern = /^[0-9]{10}$/;
        
        document.querySelectorAll(".error").forEach(e => e.remove());
        
        if (name.value.trim() === "") {
            showError(name, "Name is required");
            isValid = false;
        }
        if (!emailPattern.test(email.value)) {
            showError(email, "Enter a valid email");
            isValid = false;
        }
        if (!phonePattern.test(phone.value)) {
            showError(phone, "Enter a valid 10-digit phone number");
            isValid = false;
        }
        
        if (isValid) {
            showNotification("You've applied successfully!");
            this.reset();
        }
    });
});

function showError(input, message) {
    let error = document.createElement("div");
    error.className = "error";
    error.innerText = message;
    input.parentNode.insertBefore(error, input.nextSibling);
}

function showNotification(message) {
    let notification = document.createElement("div");
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.background = "green";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}