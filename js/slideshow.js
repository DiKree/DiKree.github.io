let slideIndexes = [1, 1];
let slideId = ["slides1", "slides2"]; 

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndexes[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.querySelectorAll(`.${slideId[no]} .mySlides`);
    
    if (n > slides.length) { slideIndexes[no] = 1 }
    if (n < 1) { slideIndexes[no] = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndexes[no] - 1].style.display = "block";
}
