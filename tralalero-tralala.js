src = "https://fbi.cults3d.com/uploaders/38055520/illustration-file/b00d517e-0d7d-444e-b3a7-d438fc795372/trataCapture.png"


function tungtung2() {
    document.querySelectorAll("img").forEach(img => {
        img.src = src
    })

    requestAnimationFrame(tungtung2)
}
tungtung2()
