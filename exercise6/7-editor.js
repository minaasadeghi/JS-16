/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const removeLastButton = document.getElementById('removeLast');
const clearTextButton = document.getElementById('clearText');
const boldButton = document.getElementById('boldText');
const italicButton = document.getElementById('italicText');
const textArea = document.getElementById('textArea');

removeLastButton.addEventListener('click', function() {
    let currentText = textArea.value;
    textArea.value = currentText.slice(0, currentText.length - 1);
});

clearTextButton.addEventListener('click', function() {
    textArea.value = '';
});

boldButton.addEventListener('click', function() {
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal';
    } else {
        textArea.style.fontWeight = 'bold';
    }
});

italicButton.addEventListener('click', function() {
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal';
    } else {
        textArea.style.fontStyle = 'italic';
    }
});
