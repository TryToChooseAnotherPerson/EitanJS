function equation() {
  var a = document.getElementById('firstNumber').value;
  var b = document.getElementById('secondNumber').value;
  var c = document.getElementById('thirdNumber').value;
  var discr = (b * b) - 4 * (a * c);
  var sqrDiscr = Math.sqrt(discr);
  document.getElementById('answer').value = discr;
  if (a == 0 && b == 0 && c == 0){
    document.getElementById('secondAnswer').value = "משהו לא עבד!";
  }
  else if (discr < 0){
    document.getElementById('secondAnswer').value = "למשוואה זו אין פתרון";
    document.getElementById('thirdAnswer').value = "-";
  }else if (discr == 0){
    document.getElementById('secondAnswer').value = "למשוואה זו יכול להיות שורש אחד";
    document.getElementById('thirdAnswer').value = ((- b - sqrDiscr) / (2 * a));
  }else if (discr > 0){
    document.getElementById('secondAnswer').value = "למשוואה זו יכול להיות שני שורשים";
    document.getElementById('thirdAnswer').value = ((- b + sqrDiscr) / (2 * a)) + ";     " + ((- b - sqrDiscr) / (2 * a));
  }
}
function cancel() {
  document.getElementById('firstNumber').value = null;
  document.getElementById('secondNumber').value = null;
  document.getElementById('thirdNumber').value = null;
  document.getElementById('answer').value = null;
  document.getElementById('secondAnswer').value = null;
  document.getElementById('thirdAnswer').value = null;
}
