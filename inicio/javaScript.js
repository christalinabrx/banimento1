const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
    playWindowsSound();
    window.location.href = "https://christalinabrx.github.io/banimento1/";
});

function playWindowsSound() {
    const audio = new Audio("https://toque123.com/wp-content/uploads/2021/11/Windows-XP-Startup.mp3");
    audio.play();
}
