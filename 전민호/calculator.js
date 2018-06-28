var btns = document.querySelectorAll('button');
var input = document.getElementById('formula');
var formula = "";
for(var i = 0; i < btns.length; i++) {
  if(btns[i].innerHTML !== '=') {
    btns[i].addEventListener('click', function(e) {
      e.preventDefault();
      formula += this.innerHTML;
      addToFormula(formula);
    });
  }
}
document.getElementById('result').addEventListener('click', function(e) {
  e.preventDefault();
  calculate();
})
document.getElementById('reset').addEventListener('click', function(e) {
  e.preventDefault();
  formula = '';
  input.value = '';
})

function addToFormula(str) {
  input.value = str;
}

function calculate() {
  var result = eval(input.value);
  input.value = result, formula = result;
}
