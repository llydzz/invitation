function moveRandomE1(elm) {
    elm.style.position = "absolute";

    // Get viewport width and height
    const vw = window.innerWidth - elm.offsetWidth;
    const vh = window.innerHeight - elm.offsetHeight;

    // Set random position but ensure it stays within the viewport
    elm.style.top = Math.max(5, Math.random() * vh) + "px";
    elm.style.left = Math.max(5, Math.random() * vw) + "px";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) { 
    moveRandom.addEventListener("mouseenter", function(e) {
        moveRandomE1(e.target);
    });
}
