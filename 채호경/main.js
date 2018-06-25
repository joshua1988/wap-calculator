let firstNumEl = document.querySelector('input[name=firstNum]');
let secondNumEl = document.querySelector('input[name=secondNum]');
let addResultEl = document.querySelector('.addResult');
let subResultEl = document.querySelector('.subResult');
firstNumEl.addEventListener('keyup', () => {
    updateResult();
});
secondNumEl.addEventListener('keyup', () => {
    updateResult();
});

let addition = function() {
    return Number(firstNumEl.value) + Number(secondNumEl.value);
}

let substraction = function() {
    return Number(firstNumEl.value) - Number(secondNumEl.value);
}

let updateResult = function() {
    addResultEl.innerHTML = `${firstNumEl.value} + ${secondNumEl.value} = <span class="result">${addition()}</span>`;
    subResultEl.innerHTML = `${firstNumEl.value} - ${secondNumEl.value} = <span class="result">${substraction()}</span>`;
}

