const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

registerBtn.addEventListener("click", function () {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (!email || !password) {
        message.textContent = "Please fill all fields.";
        return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    message.textContent = "Registered successfully.";
});

loginBtn.addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid credentials.";
    }
});
