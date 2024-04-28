document.getElementById("resetPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var email = document.getElementById("email").value;

    // Aquí puedes hacer una solicitud AJAX para enviar la dirección de correo electrónico al servidor y solicitar el restablecimiento de contraseña
    // Por ahora, simplemente mostraremos un mensaje de éxito
    alert("Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña a: " + email);
});
