function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function toggleProfileMenu() {
    var profileMenu = document.getElementById("profile-menu");
    if (profileMenu.style.display === "block") {
        profileMenu.style.display = "none";
    } else {
        profileMenu.style.display = "block";
    }
}

// Ocultar el menú del perfil al hacer clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.profile-icon')) {
        var profileMenus = document.getElementsByClassName("profile-menu");
        for (var i = 0; i < profileMenus.length; i++) {
            var openMenu = profileMenus[i];
            if (openMenu.style.display === "block") {
                openMenu.style.display = "none";
            }
        }
    }
}
