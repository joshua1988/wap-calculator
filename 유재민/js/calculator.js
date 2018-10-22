// function doCalByVanilaJs() {
//   var param1 = parseInt(document.querySelector('#param1').value);
//   var param2 = parseInt(document.querySelector('#param2').value);
  
//   var result1 = param1+param2;
//   var result2 = param1-param2;
  
//   var newResult1 = document.createTextNode(`${param1} + ${param2} = ${result1}`);
//   var newLine = document.createElement("br"); 
//   var newResult2 = document.createTextNode(`${param1} - ${param2} = ${result2}`);
  
//   var divResult =  document.querySelector('#result1');
//   divResult.appendChild(newResult1);
//   divResult.appendChild(newLine);
//   divResult.appendChild(newResult2);
// }

function doCalByJs(param) {
  var param3 = parseInt(document.getElementById("param3").value);
  var param4 = parseInt(document.getElementById("param4").value);
  
  var result3 = param3+param4;
  var result4 = param3-param4;
  var resultOut = param == 'plus' ? `${param3} + ${param4} = ${result3}` : param == 'minus' ? `${param3} - ${param4} = ${result4}` : ``;
  var newResult1 = document.getElementById("result2")
                            .innerHTML = resultOut;
}
