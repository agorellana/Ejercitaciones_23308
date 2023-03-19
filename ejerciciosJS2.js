

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  (x == y) ? console.log(x) : (x > y) ? console.log(x) : console.log(y);    
}
obtenerMayor(20,14);

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  (edad >= 18) ? console.log('Allowed') : console.log('Not Alloed')
}
mayoriaDeEdad(17);
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  
  (status === 1) ? console.log("Online") : (status === 2) ? console.log("Away") : console.log("offline");
}
conection(2);

  
function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  (idioma == "aleman") ? console.log("Guten Tag!") : (idioma == "mandarin") ? console.log("Ni Hao")  : (idioma == "ingles") ? console.log("Hello") : console.log("Hola!") ; 
}
saludo("otro");

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  (color == "blue") ? console.log("This is blue") :
  (color == "red") ? console.log("This is red") :
  (color == "green") ? console.log("This is green") : 
  (color == "orange") ? console.log("This is orange") : 
  console.log("color not found");

}
colors("black")

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  (numero == 10 || numero == 5) ? console.log("true") : console.log("false");
}
esDiezOCinco(5);

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  (numero > 20 && numero < 50) ? console.log("true") : console.log("false");
}
estaEnRango(49);

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  (Number.isInteger(numero)) ? console.log(true) : console.log(false);
    numero = Math.floor(numero);
    console.log(numero);
}
esEntero(-8)


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  ((numero % 3 === 0) && (numero % 5 === 0 )) ? console.log("fizzbuzz") : 
  (numero % 3 === 0) ? console.log("fizz") :
  (numero % 5 === 0) ? console.log("buzz") :
  console.log(numero);
}
fizzBuzz(105);


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  (((num1 === 0) || (num2 === 0)) || (num3 === 0)) ? console.log("Error") :
  (((num1 > num2) && (num1 > num3)) && (num1 > 0)) ? console.log ("Número 1 es mayor y positivo") : 
  ((num3 > num1) && (num3 > num2)) ? console.log (num3+1) : 
  (((num1 < 0) || (num2 < 0)) || (num3 < 0)) ? console.log("Hay negativos") :
  console.log("false");
}
operadoresLogicos(1,1,1)


  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

let numerosPrimos = [];

//recorremos un rango de numeros hasta el 20
for ( j = 2 ; j < 20 ; j++) {
  
  //llamamos a la funcion esPrimo que nos dice si es primo o no
  if (esPrimo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function esPrimo(numero) {

  for (let i = 2; i < numero ; i++) {

    if (numero % i === 0) { //el modulo es igual a 0 no es primo
      console.log(numero + " no es primo")
      return false;
    }
  } // el modulo es distinto de 0 es primo
  console.log(numero + " es primo");
  return numero !== 1;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  (valor == "verdad") ? console.log("Soy verdadero") : console.log("Soy Falso");
}
esVerdadero("verdad");


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
    
  let arrayTablaDelSeis = [];
  
  for (let i = 0 ; i < 11 ; i++){
    arrayTablaDelSeis.push (6 * i);
  }

  console.log(arrayTablaDelSeis);

  return arrayTablaDelSeis;
}
tablaDelSeis();

function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  let largo = numero.toString();
  (largo.length === 3) ? console.log("tiene 3 dígitos"): 
  console.log("No tiene 3 dígitos");
}
tieneTresDigitos(1234);

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

  let i = 1;
  do {
      console.log(`sumamos a ${numero} + 5 es igual a ${numero + 5} por ${i} veces`)
      i++;
      numero = numero + 5;
  } while (i < 9);
  console.log(numero);
}
doWhile(1)


