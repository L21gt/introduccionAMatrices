/* Segunda parte. 
Algoritmos utilizando matrices

A continuación, debe realizar en NodeJS los siguientes programas.
1. Escribir una función llamada “rotar(matriz)” en NodeJS que reciba como parámetro una
matriz numérica cuadrada de n × n y la rote 90 grados en sentido horario. La función debe
devolver la matriz resultante. */

function rotar(matriz) {
    const n = matriz.length;
    // Crear una nueva matriz vacía de tamaño n × n
    const resultado = Array.from({ length: n }, () => Array(n).fill(0));
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // Colocar el elemento en su posición rotada
        resultado[j][n - 1 - i] = matriz[i][j];
      }
    }
  
    return resultado;
  }
  
  // Ejemplo de uso
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log("Matriz original:");
  console.log(matriz[0]);
  console.log(matriz[1]);
  console.log(matriz[2]);
  
  const matrizRotada = rotar(matriz);
  
  console.log("Matriz rotada 90 grados en sentido horario:");
  console.log(matrizRotada[0]);
  console.log(matrizRotada[1]);
  console.log(matrizRotada[2]);


  