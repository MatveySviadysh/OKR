const displayElement = document.getElementById('display');
let currentText = '';

document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        event.preventDefault();
        currentText = currentText.slice(0, -1);
        displayElement.textContent = currentText;
    }
    else if (event.key === 'Escape') {
        event.preventDefault();
        currentText = '';
        displayElement.textContent = currentText;
    }
    else if (event.key.length === 1 && event.key.match(/[a-zA-Zа-яА-ЯёЁ]/)) {
        event.preventDefault();
        currentText += event.key.toUpperCase();
        displayElement.textContent = currentText;
    }
});