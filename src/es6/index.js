//Primer forma de pasar parámetros a una función
function newFunction(name, age, country) {
    var name = name ||  'Cinthia';
    var age = age || '34';
    var country = country || 'Mex';
    console.log(name, age, country );
}

//es6
//Reciente forma de pasar parámetros a una function
function theOtherFunction( name = 'Cinthia', age = 34, country = 'Mexico') {
    console.log(name, age, country );
}

theOtherFunction();
theOtherFunction('Ricardo', 23, 'Colombia');

let hello = 'hello';
let world = 'world';
//Primera forma de concatenar
let epicPhrase = hello +' '+ world;
console.log(epicPhrase);
// Reciente forma de concatenar es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea en los strings
// Antes
let lorem = "Love on an atom love on a cloud\n"
+ "To see the birth of all that isn't now";
//em6
let lorem2 = `can you imagine the love that is so proud?
It never has to question why or how`;

console.log(lorem);
console.log(lorem2);

//Destructuración
let person = {
    nameFirst: 'Cinthia',
    age: 34,
    country: 'México'
}

console.log(`valor de name: ${person.nameFirst}, valor de edad: ${person.age}, valor país: ${person.country}`);
let { nameFirst, age, country } = person;
console.log( nameFirst, country);

//Operador de propagación son los 3 puntitos
let team1 = ['Oscar', 'Paco', 'Pedro', 'De la Mar'];
let team2 = ['Valeria', 'Angie', 'Jessica', 'Mayra'];

let education = [ 'David', ...team2, ...team1];

console.log(education);

// Diferencia entre let , var y const
/*let : solo está disponible de forma local. 
    Está disponible solamente en el bloque de código que ha sido definido.*/
//var : está disponible de forma global. Siempre está disponible.

{
    var globalVar = 'Global var';
}
{
    let globalLet= 'Locar let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a'; // No permite la reasignación de la variable const.
console.log(a);


//Propiedad de los objetos mejorada
let nombre = 'Cinthia';
let edad = 34;
//Anteriormente es5
obj = {nombre: nombre, edad: edad};
//Reciente forma que es más amigable e intuitivo. es6
obj2 = {nombre, edad};

console.log(obj);
console.log(`Objeto 1 ${obj}
y Objeto 2 ${obj2}`);// por algun motivo que ahora no sé si lo imprimo con strings no muestra el contenido solamente [object Object]
console.log(obj2);

//Arrow Function o Funciones de tipo flecha
//Arrow funtion se caracterizan por tener una sintaxis más reducida y un 'this' no vinculable. Son funciones anónimas
const names = [{
    name: 'Cinthia', age: 34,
  }, {
    name: 'Angie', age: 35,
  }, {
    name: 'Lula', age: 5,
  }
];

let listNames = names.map(function(element){
    console.log(element.age);
});
//arrow funtion simplificación
let listOfNames = names.map(element => console.log(element.name));

const listOfName3 = (names, ages, countries) => {
     console.log(names, ages, countries);
}
const listOfName4 = age => console.log(age);

const square = num => num * num;
console.log(square(3));

//Promesas.
//Existen para solucionar el problema del callbackHell. Anteriormente solo se podían usar callbacks para simular un asincronismo
const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve('Hey OKAY!!');
        }else{
            reject('Algo salio mal =(');
        }
    })
}
helloPromise()
.then( response => console.log(response))
//En las promesas se pueden anidar una gran cantidad de elementos then
.then(() => console.log('holis'))
    .catch(error => console.log(error));


    //Sintaxis para crear clases y manejar la herencia en es6
class calculator {
    constructor() { // método para inicializar la clase
        //los valores dentro del constructor están dentro del scope global
        this.valueA = 0;
        this.valueB = 0;
    }

    //Método para sumar
    sum(valueA, valueB) {
        this.valueA = valueA; //asignando los valores que se reciben y sumando
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator(); // new representa una nueva instancia de la clase que se creó llamada calculator
console.log(calc.sum(2,3)); // Trabajando la herencia con los valores que se requieren sumar

//Trabajar con Módulos es decir manejar import y export
//Forma de es6
import { hello } from './module.js';
console.log(hello());

//Forma anterior para importar 

const hello2 = require('./module');
console.log(hello2());

//Funciones Generadoras
// Retorna una serie de valores segun el algoritmo definido

function* helloWorld() {// el asterisco asigna que es un generador
    if(true){
        yield 'Holisss'; //el valor yield en este caso retorna el valor definido, o sea, 'Holisss'
    }
    if (true) {
        yield 'A todos!'; //el yield guarda el estado de forma interna
    }
};

const generatorHola = helloWorld();
console.log(generatorHola.next().value); // este console.log recuerda el estado del primer if definido
console.log(generatorHola.next().value); // este consol.log recuerda el estado del segundo if definido en la función
console.log(generatorHola.next().value); // y como ya no hay un tercer valor de retorno este console.lo nos dará undefined

/// Son las características más relevantes de es6 que fué lanzada en 2015
