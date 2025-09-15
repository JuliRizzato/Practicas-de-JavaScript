console.log("Hola Mundo en la consola");

const nombre = "Julián";
let edad = 21;

console.log("Nombre: " + nombre + ".");
console.log("Edad: " + edad + " años.");

//Variables
let num = 3312;
let texto = 'Hola';
let booleano = true;
let arreglo = [1, 2, 3];
let objeto = {nombre: 'Julián', edad: 21};


console.log(num);
console.log(texto);
console.log(booleano);
console.log(arreglo);
console.log(objeto);
//Calculadora
console.log("Calculadora:");
let num1 = 10;
let num2 = 2;
let resultadoSuma = num1 + num2;
console.log(num1 + " + " + num2 + " = " + resultadoSuma);


let resultadoResta = num1 - num2;
console.log(num1 + " - " + num2 + " = " + resultadoResta);

let resultadoMultiplicacion = num1 * num2;
console.log(num1 + " * " + num2 + " = " + resultadoMultiplicacion);

let resultadoDivision = num1 / num2;
console.log(num1 + " / " + num2 + " = " + resultadoDivision);

let resultadoModulo = num1 % num2;
console.log(num1 + " % " + num2 + " = " + resultadoModulo);

//Operadores de comparación
console.log("Operadores de comparación:");

console.log("¿"+ num1 + " es mayor que " + num2 + "?: " + (num1 >= num2));
console.log("¿"+ num2 + " es mayor que " + num1 + "?: " + (num2 >= num1));


//ifs

let name = "Julián";
const age = 21;
console.log(`Hola, mi nombre es ${name} y tengo ${age} años.`);

if (age >= 18) {
    console.log(name + " es mayor de edad.");
} else {
    console.log(name + " es menor de edad.");
}

console.log(typeof true);

let array = ["A", "B", "C"];
console.log(array[3 - 1]); //Los arrays empiezan 0, si pongo 1 me da el segundo elemento por eso el -1

let numero = 17;
let numero2 = 3;
console.log(numero %= numero2); // numero = numero % numero2

let sinvalor = undefined;
console.log(sinvalor);