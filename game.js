const gameBox = document.getElementById('gameBox');
const playBtn = document.getElementById('playBtn');
const splashScreen = document.getElementById('splashScreen');

// Al presionar JUGAR
playBtn.addEventListener('click', () => {
    // 1. Forzar pantalla completa del contenedor
    if (gameBox.requestFullscreen) {
        gameBox.requestFullscreen();
    } else if (gameBox.webkitRequestFullscreen) { /* Safari */
        gameBox.webkitRequestFullscreen();
    } else if (gameBox.msRequestFullscreen) { /* IE11 */
        gameBox.msRequestFullscreen();
    }

    // 2. Ocultamos la portada para revelar el iframe del juego
    splashScreen.style.display = 'none';
});

// Evento para detectar cuándo se sale de pantalla completa (ej. presionar ESC)
const restaurarPortada = () => {
    if (!document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        // Si el usuario salió de pantalla completa, volvemos a mostrar la portada con el botón
        splashScreen.style.display = 'flex';
    }
};

document.addEventListener('fullscreenchange', restaurarPortada);
document.addEventListener('webkitfullscreenchange', restaurarPortada);
document.addEventListener('mozfullscreenchange', restaurarPortada);
document.addEventListener('MSFullscreenChange', restaurarPortada);