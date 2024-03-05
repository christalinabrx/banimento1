const video = document.getElementById("banimento1");

video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
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
