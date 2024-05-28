document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "123" && password === "123") {
        document.getElementById("message").textContent = "¡Inicio de sesión exitoso!";
        window.location.href = "index2.html";
    } else {
        document.getElementById("message").textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
});
