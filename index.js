// Ejercicio 1
console.log("Ejercicio 1");

const ParoImpar = (num) => {
  if (num % 2 == 0) {
    console.log("El numero " + num + " es par");
  } else if (num % 1 == 0) {
    console.log("El numero " + num + " es impar");
  }
};
ParoImpar(10);

// Ejercicio 2
console.log("Ejercicio 2");

function CualEsMayor(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
      console.log("El numero " + num1 + " es mayor");
    }
    if (num1 < num2) {
      console.log("El numero " + num2 + " es mayor");
    }
    if (num1 === num2) {
      console.log("Los numeros son iguales");
    }
  } else {
    console.log("Debe ingresar numeros");
  }
}
CualEsMayor(20, 30);

// Ejercicio 3
console.log("Ejercicio 3");

function Multiplo(num) {
  if (!isNaN(num)) {
    num /= 5;
    if (num % 1 !== 0) {
      console.log("No es multiplo de 5");
    } else {
      console.log("Es multiplo de 5");
    }
  } else {
    console.log("Debe ingresar numeros");
  }
}
Multiplo(10);

// Ejercicio 4
console.log("Ejercicio 4");

function ContarNumeros(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}
ContarNumeros(3);

// Ejercicio 5
console.log("Ejercicio 5");

function MostrarPalabra(num, palabra) {
  for (let i = num; i > 0; i--) {
    console.log(palabra);
  }
}
MostrarPalabra(8, "santiago");

// Ejercicio 6
console.log("Ejercicio 6");

let jugadores = ["Cristiano", "Messi", "Aguero", "Di Maria"];
function RecorrerArray(palabra) {
  for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
  }
}
RecorrerArray(jugadores);

// Ejercicio 7
console.log("Ejercicio 7");

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function RecorrerNumeros(num) {
  for (let i = 0; i < num.length; i++) {
    if (i !== 4) {
      console.log(num[i]);
    }
  }
}
RecorrerNumeros(numeros);

// Ejercicio 8
console.log("Ejercicio 8");

let ArrayNumeros = [1, 2, 3];
function ArrayConMultiplicacion(array, num) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
}
ArrayConMultiplicacion(ArrayNumeros, 20);
