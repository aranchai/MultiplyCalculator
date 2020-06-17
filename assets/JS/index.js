let numberInput = document.getElementById('number-input');
let multiplyInput = document.getElementById('multiply-input');
let runButton = document.getElementById('run-button');
let output = document.getElementById('output');

function printMultiply() {
    let number = Number(numberInput.value);
    let outputHTML = '';
    
    for ( i = 1; i <= 12; i++ ) {
        outputHTML += '<p>';
        outputHTML += number + ' x ' + i + ' = ' + (number * i);
        outputHTML += '</p>';
    }

    output.innerHTML = outputHTML;

}

runButton.addEventListener('click', printMultiply);