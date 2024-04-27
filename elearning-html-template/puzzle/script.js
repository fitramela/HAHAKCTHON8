const words = [["for", '(', "let", 'index', 'in', 'array', ')', '{}'], ["for", '(', "let", 'index', 'in', 'array', ')', '{}']];
let currentWord = "";

function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    const wordContainer = document.getElementById('word-container');
    const letterBank = document.getElementById('letter-bank');
    wordContainer.innerHTML = '';
    letterBank.innerHTML = '';

    // Membuat input untuk setiap kata
    for (let i = 0; i < currentWord.length; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = currentWord[i].length;
        input.size = currentWord[i].length;
        input.readOnly = true;
        input.ondrop = drop;
        input.ondragover = allowDrop;
        wordContainer.appendChild(input);
    }

    // Mengacak kata-kata dalam array currentWord
    let scrambledWords = scrambleWord([...currentWord]); // Menggunakan spread operator untuk menghindari mutasi
    for (let word of scrambledWords) {
        const span = document.createElement('span');
        span.textContent = word;
        span.draggable = true;
        span.ondragstart = drag;
        span.style.marginRight = "10px";
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
    const guess = Array.from(inputs).map(input => input.value).join(' ');
    
    if (guess.toLowerCase() === currentWord.join(' ')) {
        document.getElementById('result').textContent = "Benar!";
    } else {
        document.getElementById('result').textContent = "Salah, coba lagi!";
    }
}

function scrambleWord(wordsArray) {
    for (let i = wordsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]]; // ES6 destructuring untuk tukar elemen
    }
    return wordsArray;
}

window.onload = setNewWord;