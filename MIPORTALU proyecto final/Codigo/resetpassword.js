document.getElementById("resetPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var email = document.getElementById("email").value;

    alert("Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña a: " + email);
});
