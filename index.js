

function playSound() {
    var sound = new Audio("sounds/screamer.mp3");
    sound.play();
}

document.querySelector("button").addEventListener("click", function()  {
    playSound();

    document.querySelector("#screamer").classList.remove("image-hidden");
    document.querySelector("button").classList.add("button-hidden");
    document.querySelector("#screen").classList.add("image-hidden");

})

setTimeout(function() {
    document.querySelector("#screamer").classList.add("image-hidden");
    document.querySelector("button").classList.remove("button-hidden");
    document.querySelector("#screen").classList.remove("image-hidden");
}, 6000);
