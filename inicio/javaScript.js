const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
    playMouseClickSound();
    setTimeout(function(){
        window.location.href = "https://christalinabrx.github.io/banimento1/";
    }, 300); // Redirecionar após 300ms (ajuste conforme necessário)
});

function playMouseClickSound() {
    const audio = new Audio("https://toque123.com/wp-content/uploads/2021/11/Windows-XP-Startup.mp3"); // Substitua "click-sound.mp3" pelo caminho do seu som
    audio.play();
}
