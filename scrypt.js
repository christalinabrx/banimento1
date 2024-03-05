

    const video = document.getElementById("banimento1");

// Defina o tamanho inicial do player
let playerSize = 50;

video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        zoomIn();
    } else {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    }
});

function zoomIn() {
    // Aumente gradualmente o tamanho do player a cada 100ms
    const zoomInterval = setInterval(function () {
        playerSize += 1;

        // Limite o tamanho do player a 170%
        if (playerSize <= 170) {
            video.style.width = `${playerSize}%`;
        } else {
            clearInterval(zoomInterval);
        }
    }, 100);
}


