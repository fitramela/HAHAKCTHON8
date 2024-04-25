const words = ["kucing", "anjing", "kelinci", "jerapah"];
let currentWord = "";

function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    const wordContainer = document.getElementById('word-container');
    const letterBank = document.getElementById('letter-bank');
    wordContainer.innerHTML = '';
    letterBank.innerHTML = '';

    for (let i = 0; i < currentWord.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.readOnly = true;
        input.ondrop = drop;
        input.ondragover = allowDrop;
        wordContainer.appendChild(input);
    }

    let scrambledWord = scrambleWord(currentWord);
    for (let char of scrambledWord) {
        const span = document.createElement('span');
        span.textContent = char;
        span.draggable = true;
        span.ondragstart = drag;
        letterBank.appendChild(span);
    }

    document.getElementById('result').textContent = "";
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.textContent);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.value = data;
}

function checkGuess() {
    const inputs = document.querySelectorAll('#word-container input');
    const guess = Array.from(inputs).map(input => input.value).join('');
    
    if (guess.toLowerCase() === currentWord) {
        document.getElementById('result').textContent = "Benar!";
    } else {
        document.getElementById('result').textContent = "Salah, coba lagi!";
    }
}

function scrambleWord(word) {
    const shuffled = word.split('').sort(() => 0.5 - Math.random()).join('');
    return shuffled;
}

window.onload = setNewWord;