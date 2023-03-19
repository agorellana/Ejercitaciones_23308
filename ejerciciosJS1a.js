/* pasar las funciones a funcion flecha */

/* pasar los if a if: ternario */

/* concatenar con backstick - plantilla literal - (altGr+}o (alt96)) */


// "Return" la string provista: str
// Tu código:
let devolverString2 = (str) => str; console.log(devolverString2("Soy un texto"));

// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:
let suma = (x, y) => x + y; console.log(suma(10,20));

// Resta "x" de "y" y devuelve el valor
// Tu código:
let resta = (x, y) => x - y ; console.log(resta(10,5));

// Multiplica "x" por "y" y devuelve el valor
// Tu código:
let multiplica = (x, y) => x*y ; console.log(multiplica(2,10));

// Divide "x" entre "y" y devuelve el valor
// Tu código:
let divide = (x, y) => x/y ; console.log(divide(20,2));

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
let x = 2;
let y = 2;
(x === y) ? console.log(true) : console.log(false);

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
let str1 ="hola";
let str2 = "hi";
(str1.length === str2.length) ? console.log(true) : console.log(false);

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
let num1 = 89;
(num1<90) ? console.log(true) : console.log(false);

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
let num2 = 59;
(num2>50) ? console.log(true) : console.log(false);

// Obten el resto de la división de "x" entre "y"
// Tu código:
let obteberResto = (x, y) => x%y ; console.log(obteberResto(38,7));

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
let num3 = 8;
(num3 % 2 === 0) ? console.log(true) : console.log(false);

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
let num4 = 9;
(num4 % 2 !== 0) ? console.log(true) : console.log(false);


// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
// Tu código:
let elevarAlCuadrado = num5 => (Math.pow(num5,2)); console.log(elevarAlCuadrado(10)); 

// Devuelve el valor de "num" elevado al cubo
// Tu código:
let elevarAlCubo = num6 => (Math.pow(num6,3)); console.log(elevarAlCubo(3)); 

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:
let elevar = (num,exponent) => (Math.pow(num,exponent));console.log(elevar(5,2));

// Redondea "num" al entero más próximo y devuélvelo
// Tu código:
let redondearNumero = num =>(Math.round(num));console.log(redondearNumero(105.49));

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
// Tu código:
let redondearHaciaArriba = num =>(Math.ceil(num));console.log(redondearHaciaArriba(1.01));

//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()
let numeroRandom = () => Math.random() ; console.log(numeroRandom())


//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
let numero = -1;
(numero > 0) ? console.log(`El numero es positivo`) : (numero < 0) ? console.log (`El numero es negativo`) : console.log("false")


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  //return str + "!";
  console.log(`${str}!`)
}
agregarSimboloExclamacion("hello world");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  //return "Soy, " + nombre +" "+ apellido;
  console.log(`Soy ${nombre} ${apellido}`)
}
combinarNombres("Adriana","Orellana");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  //return "Hola " + nombre + "!";
  console.log(`Hola soy ${nombre}!`)
}
obtenerSaludo("Martin");


// Retornar el area de un cuadrado teniendo su altura y ancho
// Tu código:
let obtenerAreaRectangulo = (alto, ancho) => alto*ancho;console.log(obtenerAreaRectangulo(20,30));

//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//Escribe tu código aquí
let retornarPerimetro = (lado) => lado*4;console.log(retornarPerimetro(20));

//Desarrolle una función que calcule el área de un triángulo.
//Escribe tu código aquí
let areaDelTriangulo = (base, altura) =>  (base * altura) / 2; console.log(areaDelTriangulo(10,20));


//Supongamos que 1 euro equivale a 1.20 dólares. 
//Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí
deEuroAdolar = (euro) => (euro * 1.20) ; console.log(deEuroAdolar(10));

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

  if (letra.length !== 1){
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
