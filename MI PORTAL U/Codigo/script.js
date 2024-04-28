document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí podrías hacer una solicitud AJAX para enviar los datos del formulario al servidor y autenticar al usuario
    // Por ahora, simplemente mostraremos un mensaje en función de si el usuario es "admin" y la contraseña es "password"
    if (username === "123" && password === "123") {
        document.getElementById("message").textContent = "¡Inicio de sesión exitoso!";
        // Redirigir al usuario a index2.html después de iniciar sesión
        window.location.href = "index2.html";
    } else {
        document.getElementById("message").textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
});
