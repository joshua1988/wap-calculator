document.getElementById("btnAdd").addEventListener("click", function() {
    var result;
    var firstNum = document.getElementById("firstNum").value;
    var secondNum = document.getElementById("secondNum").value
    result = Number(firstNum) + Number(secondNum);
    document.getElementById("result").innerText = "Add " + firstNum + " with " + secondNum + " is " + result;
});

document.getElementById("btnSub").addEventListener("click", function() {
    var result;
    var firstNum = document.getElementById("firstNum").value;
    var secondNum = document.getElementById("secondNum").value
    result = Number(firstNum) - Number(secondNum);
    document.getElementById("result").innerText = "Subtract " + secondNum + " from " + firstNum + " is " + result;
});