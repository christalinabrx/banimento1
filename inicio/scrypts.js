const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
    playMouseClickSound();
    setTimeout(function(){
        window.location.href = "https://christalinabrx.github.io/banimento1/";
    }, 4000); // Redirecionar após 3000ms (ajuste conforme necessário)
});

function playMouseClickSound() {
    const audio = new Audio("https://toque123.com/wp-content/uploads/2021/11/Windows-XP-Startup.mp3");
    audio.play();
}
