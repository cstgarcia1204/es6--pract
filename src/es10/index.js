// flat recibe como argumento la profundidad de la matriz aplanada
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat()); //sino se le pasa nada se toma como solo un primer nivel de profundidad: Resultado : [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(1)); // se indica explicitamente 1er nivel asi que resultado : [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2)); /* resultado:
[
    1, 2, 3, 1, 2,
    3, 1, 2, 3
] */

let array2 = [1,2,3,4,5];
console.log(array2.flatMap( value =>  [value, value * 2])); /* Resultado es la matriz original multiplicado por 2
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
ejem imprime 1, lo multiplica por2 y lo imprime, imprime 2 y lo multiplica x2 lo imprime, imprime 3... hasta finalizar
*/
let unis = ['UDG', 'UAS', 'UACH', 'UAD'];
console.log(unis.flatMap( value => [value + ' Ing. Software' ])); /*Resultado :
[
  'UDG Ing. Software',
  'UAS Ing. Software',
  'UACH Ing. Software',
  'UAD Ing. Software'
]
*/


//trimStart
let hello = '          hello world';
console.log(hello);
console.log(hello.trimStart());

let hola = 'hola Lula        ';
console.log(hola);
console.log(hola.trimEnd());

//Optional catch binding o  tmb optional catch bin
/*
Lo clásico era trabajar de la siguiente manera
try {
    // code that may cause an error
} catch (error) {
    // code that handles the error
} */

try {

} catch { // ahora directamente puedes pasar a
    error// manejar el error en este bloque
}



//from entries que va a transformar clave - valor en un objeto

let misDatos = [['name', 'oscar'],['country', 'Mexico']]
console.log(Object.fromEntries(misDatos));// Resultado : { name: 'oscar', country: 'Mexico' }

//Objeto de tipo simbolo que permite acceder a una descripcion

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description); //Resultado : My Symbol

