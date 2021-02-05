function equation() {
  var a = document.getElementById('firstNumber').value;
  var b = document.getElementById('secondNumber').value;
  var c = document.getElementById('thirdNumber').value;
  var discr = (b * b) - 4 * (a * c);
  var sqrDiscr = Math.sqrt(discr);
  document.getElementById('answer').value = discr;
}
function cancel() {
  document.getElementById('firstNumber').value = null;
  document.getElementById('secondNumber').value = null;
  document.getElementById('thirdNumber').value = null;
  document.getElementById('answer').value = null;
  document.getElementById('secondAnswer').value = null;
  document.getElementById('thirdAnswer').value = null;
}
