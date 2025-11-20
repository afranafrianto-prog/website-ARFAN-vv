function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("errorMsg");

    const correctUser = "siapa namamu";
    const correctPass = "namaku terkenal";

    if (user === correctUser && pass === correctPass) {
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Username atau password salah!";
    }
}
