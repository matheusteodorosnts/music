const btnmusic = document.getElementById("btnmusic");
const playorstop = document.getElementById("playorstop");
const sound = document.getElementById("sound");

btnmusic.addEventListener("click", () => {
    if (playorstop.src.includes("play.png")) {
        playorstop.src = "imgs/stop.png";
        sound.play();
    } else {
        playorstop.src = "imgs/play.png";
        sound.pause();
    };
});