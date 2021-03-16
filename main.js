

function open() {
    console.log('test')
    document.getElementById("menu").classList.toggle("show");
}
document.getElementById("trigger").addEventListener('click', open)