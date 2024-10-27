function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    // Cambia el selector para que busque específicamente la sección "Sobre mí"
    const aboutSection = document.getElementById('sobre-mi');

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Mostrar más sobre mí';
    toggleButton.style.marginTop = '30px';
    aboutSection.appendChild(toggleButton); // Agrega el botón a la sección "Sobre mí"

    const additionalInfo = document.createElement('p');
    additionalInfo.textContent = "Soy una persona curiosa y entusiasta que siempre busca aprender algo nuevo. En mi tiempo libre, disfruto explorar tecnologías emergentes. Mis valores fundamentales son la integridad y la colaboración, y creo firmemente que el trabajo en equipo es clave para lograr resultados exitosos. Actualmente, estoy trabajando en varios proyectos personales, como un portafolio en línea y una pequeña aplicación de gestión de tareas, que me permiten aplicar lo aprendido en mis estudios de desarrollo web. A largo plazo, aspiro a especializarme en el desarrollo de soluciones logísticas que mejoren la eficiencia operativa y contribuyan a un mundo más conectado.";
    additionalInfo.style.display = 'none'; // Ocultar inicialmente
    aboutSection.appendChild(additionalInfo); // Agrega la información a la sección "Sobre mí"

    toggleButton.addEventListener('click', function() {
        if (additionalInfo.style.display === 'none') {
            additionalInfo.style.display = 'block';
            toggleButton.textContent = 'Ocultar información';
        } else {
            additionalInfo.style.display = 'none';
            toggleButton.textContent = 'Mostrar más sobre mí';
        }
    });
});
