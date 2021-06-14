// Escribir texto en la página (el documento html)

document.write("<h1>Hello world!</h1>");

// Escribir texto en la consola:

console.log("Hi...");

// Escribir errores en consola:

console.error("Error...");


// Tipos de datos:

"Hola mundo"; // String 1
'Hola mundo'; // String 2

10; // Integer (entero)
3.5; // Float

// Bools
true;
false;

// Array
["María", "Joe", "Ryan"]
[1, 3, 5, 2, 10]

let abcVar = ['A', 'B', 'C', 'D'];
// Creamos un array
console.log(abcVar[0]);
// Accedemos al primer elemento del array.


// Object
let object = {
    "username": 'Ryan',
    "score": 70.4,
    "hours": 14,
    "proffesional": true
};



// Variables:
var name = "john";  // La palabra clave 'var' le dice a javaScript que estamos
                    //creando una variable.

let lastName = "Ramirez";   // 'let' es una palabra clave que cumple casi la
                            // misma funcion que 'var'

// Reasignar valor de variable.

name = "pepe";      // Observemos que aquí estamos reasignando un nuevo valor a
                    // la variable. Nota que no necesitamos la palabra clave
                    // 'var' o 'let' al momento de reasignar valores.

const pi = 3.1415;  // Esta es una constante, una variable que no cambiará con
                    // el tiempo, debemos utilizar 'const' en lugar de 'var' o
                    // 'let'.


// Comentarios: esto es un comentario.
/* Comentario
multilinea */





// Operadores en JavaScript:

// Suma:

let numberOne = 23;
let numberTwo = 56;

let result = numberOne + numberTwo;
console.log("Suma: " + result);

let resultResta = numberOne - numberTwo;
console.log("Resta: " + resultResta);

let resultMultiplicacion = numberOne * numberTwo;
console.log("Multiplicación: " + resultMultiplicacion);

let resultDivision = numberOne / numberTwo;
console.log("Division: " + resultDivision);


// Concatenación:

let firstName = "John";
let lastName2 = "Carter";
let completeName = firstName + " " + lastName2;

console.log(completeName);


// Operadores lógicos (comparaciones):

numberOne = 100;
numberTwo = 300;

let resultado = numberOne > numberTwo;  // mayor que
console.log(resultado)

resultado = numberOne < numberTwo;      // menor que
console.log(resultado);

resultado = numberOne == numberTwo;     // igual que
console.log(resultado);

resultado = numberOne === numberTwo;    // igual que (comparacion más estricta)
console.log(resultado);

resultado = numberOne != numberTwo;     // diferente de
console.log(resultado);

resultado = numberOne <= numberTwo;     // menor o igual que
console.log(resultado);

resultado = numberOne >= numberTwo;     // mayor o igual que
console.log(resultado);


// Condicionales:
// if, else if, else:

if (resultado == numberTwo) {
    // Condicional "if"
    console.log("login Correcto");
}
else {
    // Condicional "else"
    console.log("login Incorrecto");
};

// Otro ejemplo (incluyendo el "else if"):

let score = 70;

if (score > 30) {
    console.log("You need more practice");
}
else if (score > 15) {
    // condicional "else if"
    console.log("Estas mejorando...");
}
else {
    console.log("You need to follow this tutorial");
}

// switch:

let typeCard = 'oleo Card';

switch(typeCard) {
    case 'Debit Card':
        console.log('This is a debit card');
        break;
    case 'Credit Card':
        console.log('This is a credit card');
        break;
    default:
        console.log("You doesn't have any card");
}


// Bucles:

// Bucles while:

let counter = 4;

while(counter > 0) {
    console.log(counter);
    counter -= 1;
}

// bucle for:

let arrayNames = ['ryan', 'joe', 'john'];
console.log(arrayNames.length);
// Dar longitud de array

for(let i = 0; i < arrayNames.length; i++) {
    // Un bucle for para pasar a través de un array
    console.log(arrayNames[i]);
}


// Funciones:

function greeting() {
    // Definicion de la función.
    console.log('Hello');
}

greeting();
// Llamado de la función.

function saludar(personaSaludar) {
    // Definir función para pasarle parámetros.
    for(let i = 0; i < arrayNames.length; i++) {
        console.log("Hola " + personaSaludar[i]);
    }
}

saludar(arrayNames);
// Pasarle una lista como parámetros a una función.

function add(numer1, numer2) {
    // Otro ejemplo de función
    let resultado = numer1 + numer2;
    console.log("El resultado de una suma es " + resultado);
}

add(385, 897);


// Finalizado el curso básico de JavaScript de fazt.
// Él recomienda seguir con el estudio del DOM (Document Object Model).

// También estudiar NodeJS:
// Permite usar JavaScript para utilizar en aplicaciones de servidor (así
// evitando el uso del navegador).

// También estudiar HTML5 APIs.



// Día 1: voy por "curso javascript basico Fazt"
// url: https://www.youtube.com/watch?v=RqQ1d1qEWlE

// minuto: 1:39:10

