document.addEventListener("DOMContentLoaded", function () {

    // --- Efecto de Escritura (Typing Effect) ---
    const typingTextElement = document.getElementById("typing-text");
    const roles = [
        "Ayman Hamouni Ismaili",
        "Hacker Ético",
        "Pentester Profesional",
        "Consultor de Seguridad"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150; // Velocidad de escritura

    function type() {
        const currentRole = roles[roleIndex];
        let displayText = "";

        if (isDeleting) {
            // Borrando
            displayText = currentRole.substring(0, charIndex - 1);
            charIndex--;
            delay = 50;
        } else {
            // Escribiendo
            displayText = currentRole.substring(0, charIndex + 1);
            charIndex++;
            delay = 150;
        }

        typingTextElement.textContent = displayText;

        if (!isDeleting && charIndex === currentRole.length) {
            // Pausa al final de la palabra
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Cambia a la siguiente palabra
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    type(); // Inicia la animación

    // --- Efecto de Desplazamiento Suave (Opcional pero recomendado) ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});