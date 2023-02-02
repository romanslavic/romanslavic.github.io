
function playSound() {
    var sound = new Audio("sounds/screamer.mp3");
    sound.play();
}

document.querySelector("button").addEventListener("click", function()  {
    playSound();
})
