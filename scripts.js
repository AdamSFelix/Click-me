const number = document.getElementById('number');
const button = document.getElementById('btn');
let x = 0;

function addNumber() {
    x += 1;
    number.innerText = x;
}

button.addEventListener('click', addNumber)