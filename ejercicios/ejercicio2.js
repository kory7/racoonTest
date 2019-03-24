//En este ejercicio solo pude hacer la impresion de los arreglos de los unos.
const arreglo = [1.2, 2.1, 2.2]; // datos
let sum = 0;
let unos = [];
let arregloUnos = [];
let arregloSum = [];
for (let i = 0; i < arreglo.length; i++) {
  let entero = Math.trunc(arreglo[i]);
  let decimal = Number((arreglo[i] - Math.floor(arreglo[i])).toFixed(1)) * 10;
  for (let j = 0; j < entero; j++) {
    unos = [];
    for (let k = 0; k < decimal; k++) {
      unos.push(1);
    }
    arregloUnos.push(unos);
  }
}
arregloUnos.sort();

console.log(arregloUnos);
