function displayRandomPen() {
    var embeddedPens = document.querySelectorAll('.embeddedPen');
    hideElements(embeddedPens);
    showRandomElement(embeddedPens);
}

function hideElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

function showRandomElement(elements) {
    var randomElement = Math.floor(Math.random() * elements.length);
    elements[randomElement].style.display = 'block';
}