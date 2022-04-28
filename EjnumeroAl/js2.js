function adivinaAleatorio() {
  var numeroAleatorio = Math.floor(Math.random() * 99 + 1);
 console.log(numeroAleatorio);
  document.getElementById("resultado").innerHTML =
  "Número aleatorio = " + numeroAleatorio;
  var contador =1;
  var respuesta = parseInt(prompt("Introduzca un numero del 1 al 100"));
 
  while (respuesta!==numeroAleatorio && contador<30 ) {
    if (respuesta < numeroAleatorio) {
      respuesta =  parseInt(prompt(
        "El número es mayor que el introducido. Inténtelo de nuevo"
      ));
    } else {
      respuesta =  parseInt(prompt(
        "El número es menor que el introducido. Inténtelo de nuevo"
      ));
    }
    contador++;
    document.getElementById("contador").innerHTML = "Intentos = " + contador;
  }
  switch (true) {
    case contador<8:
      alert("Enhorabuena, has sido rápido");
      break;
    case contador<=10:
      alert( "Lo has encontrado");
      break;
    default:
        alert( "Demasiados intentos");
  }
}
