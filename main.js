// Modo oscuro/claro


const toggleModeBtn = document.getElementById('toggleMode');
const lightModeIcon = document.getElementById('lightModeIcon');
const darkModeIcon = document.getElementById('darkModeIcon');
const body = document.body;

toggleModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeIcon.style.display = 'none';
        lightModeIcon.style.display = 'inline-block';
        toggleModeBtn.setAttribute('aria-label', 'Activar modo claro');
    } else {
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'inline-block';
        toggleModeBtn.setAttribute('aria-label', 'Activar modo oscuro');
    }
});

// Inicializa el estado de los iconos según el modo inicial (si lo tienes)
if (body.classList.contains('dark-mode')) {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'inline-block';
} else {
    lightModeIcon.style.display = 'none';
    darkModeIcon.style.display = 'inline-block';
}

// Efecto flip cards
document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

window.addEventListener("load", () => {
    const currentDate = new Date();
    document.getElementById("currentYear").innerText = currentDate.getFullYear();


});
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false }); // Inicializar sin toggle automático

    // Función para cerrar el menú si está abierto y luego navegar
    function closeMenuAndNavigate(event) {
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
            // Esperar un breve momento (transición del menú) antes de seguir el enlace
            setTimeout(() => {
                const targetId = this.getAttribute('href');
                if (targetId.startsWith('#')) {
                    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
                    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace (si es necesario)
                }
            }, 300); // Ajusta el tiempo según la duración de la animación de tu menú
        } else {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
                event.preventDefault(); // Evitar el comportamiento predeterminado del enlace (si es necesario)
            }
        }
    }

    // Asignar el evento personalizado a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenuAndNavigate);
    });




    function closeNavbar() {
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
        }
    }

    // Inicialización del modo (sin cambios necesarios aquí)
    if (body.classList.contains('dark-mode')) {
        darkModeIcon.style.display = 'none';
        lightModeIcon.style.display = 'inline-block';
    } else {
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'inline-block';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const contactoCorreoBtn = document.getElementById('contactoCorreoBtn');
    const contactoWhatsappBtn = document.getElementById('contactoWhatsappBtn');

    if (contactoCorreoBtn) {
        contactoCorreoBtn.addEventListener('click', function (event) {
            event.preventDefault();
            alert('Esta es una página de muestra. La función de correo no está activa.');
        });
    }

    if (contactoWhatsappBtn) {
        contactoWhatsappBtn.addEventListener('click', function (event) {
            event.preventDefault();
            alert('Esta es una página de muestra. La función de WhatsApp no está activa.');
        });
    }
});