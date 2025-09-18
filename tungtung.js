src = "https://brushme.com/static/uploads/media/products/product_12927_68348a383fe072.97120940.jpg"

function tungtung2() {
    document.querySelectorAll("img").forEach(img => {
        img.src = src
    })

    requestAnimationFrame(tungtung2)
}
tungtung2()
