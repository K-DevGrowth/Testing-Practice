const caesarCipher = (plaintext, key) => {
    let result = '';
    
    for (let char of plaintext) {
        if (char >= 'a' && char <= 'z') {
            let code = ((char.charCodeAt(0) - 97 + key) % 26) + 97;
            result += String.fromCharCode(code);
        }
        else if (char >= 'A' && char <= 'Z') {
            let code = ((char.charCodeAt(0) - 65 + key) % 26) + 65;
            result += String.fromCharCode(code);
        }
        else {
            result += char;
        }
    }

    return result;
}

module.exports = caesarCipher;