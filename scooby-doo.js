src = "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p29039_p_v8_ah.jpg"


function changeAllImages() {
    document.querySelectorAll("img").forEach(img => {
        img.src = src
    })

    requestAnimationFrame(changeAllImages)
}
changeAllImages()
