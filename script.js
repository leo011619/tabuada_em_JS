function gerar() {
  var num = document.getElementById("txtn");
  var tabu = document.getElementById("txttabu");

  if (num.value.length == 0) {
    window.alert("[Erro] Por favor coloque um número.");
  } else {
    var n = Number(num.value);
    tabu.innerHTML = ``;
    for (i = 1; i <= 10; i++) {
      var c = n * i;
      tabu.innerHTML += ` <br> ${n} * ${i} = ${c} </br>`;
    }
  }
}
