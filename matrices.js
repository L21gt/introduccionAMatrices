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
  
  // Ejemplo de uso 1
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // imprime la matriz original en un orden visual por filas
  console.log("Matriz original:");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
  }
  
  const matrizRotada = rotar(matriz);
  
    // imprime la matriz rotada en un orden visual por filas
  console.log("Matriz rotada 90 grados en sentido horario:");
  for (let i = 0; i < matrizRotada.length; i++) {
    console.log(matrizRotada[i]);
  }


  //Ejemplo de uso 2
    const matriz2 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    // imprime la matriz original en un orden visual por filas
    console.log("Matriz original:");
    for (let i = 0; i < matriz2.length; i++) {
        console.log(matriz2[i]);
    }

    const matrizRotada2 = rotar(matriz2);

    // imprime la matriz rotada en un orden visual por filas
    console.log("Matriz rotada 90 grados en sentido horario:");
    for (let i = 0; i < matrizRotada2.length; i++) {
        console.log(matrizRotada2[i]);
    }
    




/*   Desarrolla una función llamada “multiply(matrizA,matrizB)” en Node que reciba como
parámetros dos matrices numéricas, que combine los valores de estas siguiendo las
siguientes instrucciones:

    2.1. Condición Inicial: La cantidad de columnas de la primera tabla debe coincidir con la
    cantidad de filas de la segunda tabla. Si no cumplen esta condición, el programa debe
    mostrar un mensaje en consola que indique que las tablas no son compatibles para la
    operación y la función debe retornar un arreglo vacío.

    2.2. Combinación de Valores:
        2.2.1. Para generar cada valor de la tabla resultante: Tome una fila de la primera tabla y
        combínela con una columna de la segunda tabla. Multiplique cada número de la fila
        de la primera tabla por el número correspondiente de la columna de la segunda
        tabla. Sume los resultados de estas multiplicaciones.
        2.2.2. Estructura del Resultado: La nueva tabla tendrá tantas filas como la primera tabla
        y tantas columnas como la segunda tabla. */
  
function multiply(matrizA, matrizB) {
    // Verificar que las matrices sean compatibles
    if (matrizA[0].length !== matrizB.length) {
        console.log("Las matrices no son compatibles para la operación.");
        return [];
    }

    // Inicializar la matriz resultante
    const result = [];

    // Realizar la multiplicación
    for (let i = 0; i < matrizA.length; i++) {
        const row = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrizA[0].length; k++) {
                sum += matrizA[i][k] * matrizB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}

// Ejemplo de uso
const matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

const resultado = multiply(matrizA, matrizB);

if (resultado.length > 0) {
    console.log("Resultado de la multiplicación de matrices:");
    console.table(resultado);
}
