let input = document.getElementById('text');
let output = document.getElementById('output');
let toUpper = document.getElementById('to-upper');
let toLower = document.getElementById('to-lower');

toUpper.addEventListener('click', () => {
    let str = input.value.toUpperCase().split('');
    str[0] = str[0].toLowerCase();
    str = str.join('');
    output.innerText = str;
})

toLower.addEventListener('click', () => {
    let str = input.value.toLowerCase().split('');
    str[0] = str[0].toUpperCase();
    str = str.join('');
    output.innerText = str;
})