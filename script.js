function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let result = document.getElementById('result').value;
    let finalResult = eval(result);
    document.getElementById('result').value = finalResult;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}