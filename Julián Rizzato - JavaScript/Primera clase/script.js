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

console.log(typeof true);

let array = ["A", "B", "C"];
console.log(array[3 - 1]); //Los arrays empiezan 0, si pongo 1 me da el segundo elemento por eso el -1

let numero = 17;
let numero2 = 3;
console.log(numero %= numero2); // numero = numero % numero2

let sinvalor = undefined;
console.log(sinvalor);

console.log("'John' is " + typeof "John");
console.log("'3.14' is " + typeof 3.14);
console.log("'NaN' is " + typeof NaN);
console.log("'false' is " + typeof false);
console.log("'[1, 2, 3, 4]' is " + typeof [1, 2, 3, 4]);
console.log("'{name:'John', age:34}' is " + typeof {name:'John', age:34});
console.log("'new Date()' is " + typeof new Date());
console.log("'function () {}' is " + typeof function () {});
console.log("'myCar' is " + typeof myCar);
console.log("'null' is " + typeof null);

//Estructuras de control

const name = "Julián";
let age = 21;
console.log(`Hola, mi nombre es ${name} y tengo ${age} años.`);

if (age >= 18) {
    console.log(name + " es mayor de edad.");
} else {
    console.log(name + " es menor de edad.");
};

    document.getElementById("btnMostrarDia").onclick = function() {
    let diaInput = document.querySelector("input").value;
    let dia = parseInt(diaInput);
        switch (dia){
        case 1: alert("Lunes"); break;
        case 2: alert("Martes"); break;
        case 3: alert("Miércoles"); break;
        case 4: alert("Jueves"); break;
        case 5: alert("Viernes"); break;
        case 6: alert("Sábado"); break;
        case 7: alert("Domingo"); break;
        default: alert("No es un día válido"); break;
}};



// Bucles
console.log("Bucle for")
for (let i = 1; i <= 10; i++){
    console.log(i)
};
console.log("Bucle while")
let i2 = 0;
while (i2 < 5){
    console.log(i2);
    i2++;
};





//Crea un programa que calcule el factorial de un número usando while.

//Para sacar el factorial de un número, multiplica ese número por todos los enteros positivos menores que él hasta llegar a 1. El factorial de un número n se representa como n!. Por ejemplo, 4! = 4 × 3 × 2 × 1 = 24. 
console.log("Sacar factorial")
let numeroF = 4;
let factorial = 1;
let contadorF = 1;
while (contadorF < numeroF){
    factorial *= contadorF;
    contadorF++;
};
console.log(factorial)