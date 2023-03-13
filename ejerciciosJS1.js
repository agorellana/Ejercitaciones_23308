/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = null;
const newString = "Soy un texto";
console.log(newString);

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = null;
const newNum = 58;
console.log(newNum);

// Crea una variable booleana:
const nuevoBool = null;
const newBool = true;
console.log(newBool);

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
console.log(nuevaResta);

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;
console.log(nuevaMultiplicacion)

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
console.log(nuevoModulo)



function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
console.log(devolverString("Soy un texto"));


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
console.log(suma(10,20));

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y;
}
console.log(resta(10,5));

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x*y
}
console.log(multiplica(2,10));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x/y;
}
console.log(divide(20,2));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if (x === y){
    return true;
  } else{
    return false;
  }
}
console.log(sonIguales(2,2));
console.log(sonIguales(2,3));
;

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length){
    return true;
  } else{
    return false;
  }
}
console.log(tienenMismaLongitud("hola","chau"));
console.log(tienenMismaLongitud("hola","hi"));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }else{
    return false;
  }
}
console.log(menosQueNoventa(89));
console.log(menosQueNoventa(90));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    return true; 
  }else{
    return false;
  }
}
console.log(mayorQueCincuenta(50));
console.log(mayorQueCincuenta(51));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
console.log(obtenerResto(38,7));
console.log(obtenerResto(10,2));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0) {
    return true;
  }else{
    return false;
  }
}
console.log(esPar(8));
console.log(esPar(9));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 != 0) {
    return true;
  }else{
    return false;
  }
}
console.log(esImpar(9));
console.log(esImpar(8));

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num,2);
}
console.log(elevarAlCuadrado(2));
console.log(elevarAlCuadrado(3));

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num,3);
}
console.log(elevarAlCubo(2));
console.log(elevarAlCubo(3));

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num,exponent);
}
console.log(elevar(5,2));
console.log(elevar(5,3));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}
console.log(redondearNumero(85.5));
console.log(redondearNumero(105.49));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}
console.log(redondearHaciaArriba(11.255));
console.log(redondearHaciaArriba(1.01));

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}
console.log(numeroRandom());

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero > 0){
    return "El número es positivo";
  }else if(numero < 0){
    return "El número es Negativo";
  }else if(numero === 0){
    return false;
  }
}
console.log(esPositivo(0));
console.log(esPositivo(1));
console.log(esPositivo(-1));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}
console.log(agregarSimboloExclamacion("hello world"));

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return "Soy, " + nombre +" "+ apellido;
}
console.log(combinarNombres("Adriana","Orellana"));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!";
}
console.log(obtenerSaludo("Martin"));


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto*ancho;
}
console.log(obtenerAreaRectangulo(20,30));

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado*4;
}
console.log(retornarPerimetro(20));

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return base * altura / 2; 
}
console.log(areaDelTriangulo(10,20))

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20;
}
console.log(deEuroAdolar(10));


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

  if (letra.length != 1){
    return "Dato incorrecto tiene mas de 1 caracter";
  } else {
    switch (letra){
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      return "la letra " + letra + " es una vocal";
      default:
      return "Dato incorrecto " + letra;
    }
  }
}
console.log(esVocal('a'));
console.log(esVocal('e'));
console.log(esVocal('i'));
console.log(esVocal('o'));
console.log(esVocal('u'));
console.log(esVocal('am'));
console.log(esVocal('z'));
console.log(esVocal('1'));
