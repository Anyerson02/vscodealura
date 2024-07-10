function processText() {
    const textInput = document.getElementById('text').value.toLowerCase();
    const mode = document.getElementById('mode').value;
    let result = '';

    if (mode === 'encrypt') {
        result = encrypt(textInput);
    } else if (mode === 'decrypt') {
        result = decrypt(textInput);
    }

    document.getElementById('result').value = result;
    updateMessage(textInput);
}

function encrypt(text) {
    const mappings = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let encryptedText = '';
    for (let char of text) {
        if (mappings[char]) {
            encryptedText += mappings[char];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

function decrypt(text) {
    const mappings = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let decryptedText = text;

    for (let key in mappings) {
        let regex = new RegExp(key, 'g');
        decryptedText = decryptedText.replace(regex, mappings[key]);
    }

    return decryptedText;
}

function copyToClipboard() {
    const resultTextarea = document.getElementById('result');
    resultTextarea.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function updateMessage(text) {
    const messageParagraph = document.getElementById('message');
    if (text.trim() === '') {
        messageParagraph.textContent = 'Ningún mensaje fue encontrado';
    } else {
        messageParagraph.textContent = '';
    }
}
