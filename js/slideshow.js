function plusSlides(n, slideshowClass) {
    var slides = document.querySelectorAll('.' + slideshowClass + ' .fade');
    var currentSlideIndex = getCurrentSlideIndex(slideshowClass);
    showSlides(currentSlideIndex += n, slides);
}

function getCurrentSlideIndex(slideshowClass) {
    // Логика для получения текущего индекса слайда для каждой игры
}

function showSlides(n, slides) {
    // Логика показа слайдов
}
