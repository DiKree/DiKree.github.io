let slideIndex1 = 1;
let slideIndex2 = 1;
showSlides(slideIndex1, 1);
showSlides(slideIndex2, 2);

function plusSlides(n, slideshowId) {
    if (slideshowId === 1) {
        showSlides(slideIndex1 += n, 1);
    } else if (slideshowId === 2) {
        showSlides(slideIndex2 += n, 2);
    }
}

function showSlides(n, slideshowId) {
    let i;
    let slides;
    
    if (slideshowId === 1) {
        slides = document.getElementsByClassName("mySlides1");
        if (n > slides.length) {slideIndex1 = 1}
        if (n < 1) {slideIndex1 = slides.length}
    } else if (slideshowId === 2) {
        slides = document.getElementsByClassName("mySlides2");
        if (n > slides.length) {slideIndex2 = 1}
        if (n < 1) {slideIndex2 = slides.length}
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Скрыть все слайды
    }
    
    if (slideshowId === 1) {
        slides[slideIndex1 - 1].style.display = "block"; // Показать текущий слайд для первого слайд-шоу
    } else if (slideshowId === 2) {
        slides[slideIndex2 - 1].style.display = "block"; // Показать текущий слайд для второго слайд-шоу
    }
}
