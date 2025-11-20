function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("errorMsg");

    const correctUser = "admin";
    const correctPass = "12345";

    if (user === correctUser && pass === correctPass) {
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Username atau password salah!";
    }
}

// ---------------- HALAMAN BERPINDAH TANPA RELOAD ---------------- //

function showPage(pageId) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(p => p.style.display = "none");

    document.getElementById(pageId).style.display = "block";
}
