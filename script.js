// Menu interactivo
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Cerrar menu al hacer click en un enlace
const enlaces = document.querySelectorAll('.menu a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('active');
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});