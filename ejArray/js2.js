function lista() {
  var v = [];

  for (let i = 0; i < 10; i++) {
    var numeroAleatorio = Math.round(Math.random() * 100);
    v.push(numeroAleatorio);
  }
console.log(v);

  for (let i = 0; i < v.length; i++) {
    for (let j = i + 1; j < v.length; j++) {
      if (v[i] > v[j]) {
        aux = v[j];
        v[j] = v[i];
        v[i] = aux;
      }
    }
  }
console.log(v);
}
