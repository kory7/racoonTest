//Ejercicio 1

const multArray = arreglo => {
  let sum = 1;
  const nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    let inst = arreglo.shift();
    for (let j = 0; j < arreglo.length; j++) {
      sum *= arreglo[j];
    }
    arreglo.push(inst);
    nuevoArreglo.push(sum);
    sum = 1;
  }
  return nuevoArreglo;
};

const arreglo = [1, 2, 3]; // datos

console.log(multArray(arreglo));
