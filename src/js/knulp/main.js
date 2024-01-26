// import editor from "./editor/editor.js"

// editor.instantiateMenu()

document.addEventListener('alpine:init', () => {
    Alpine.store('game', {
        title: '',
    })
})

const canvas = document.getElementById("sprite-editor");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200 0 0)";

let pixelSize = 16;
for (let i = 0; i < 64; i++) {
    ctx.fillRect(pixelSize*~~(i/8), pixelSize*(i%8), pixelSize-1, pixelSize-1);
}
