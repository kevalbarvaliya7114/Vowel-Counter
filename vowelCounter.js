let textInput = document.getElementById('textInput');
let vowelCountDisplay = document.getElementById('vowelCount');

textInput.addEventListener('input', () => {
    let text = textInput.value;
    let vowelCount = countVowels(text);
    vowelCountDisplay.textContent = `Vowel Count: ${vowelCount}`;
});

function countVowels(text) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
