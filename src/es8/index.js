// entries - transforma un Objeto a una matriz. Devuelve la clave y los valores dentro de una matriz
const data = {
    frontend: 'Cinthia',
    backend: 'Ana',
    design: 'Fernanda'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//Retorna
/*
[
  [ 'frontend', 'Cinthia' ],
  [ 'backend', 'Ana' ],
  [ 'design', 'Fernanda' ]
] 
3
*/


//values - transforma unicamente los valore en un array
const drivers = {
    Didi: 'Angie',
    Uber: 'Jessica',
    Indrive: 'Janeth'
};
const valuesD = Object.values(drivers);
console.log(valuesD);
//Retorna ; [ 'Angie', 'Jessica', 'Janeth' ]



//padStart  o padEnd   -   Como antemponer o agregar una cadena vacia a un string o en el caso de End al final de la cadena
const string = 'LulaMeme';
console.log(string.padStart(17, 'Dormilona'));
console.log(string.padEnd(19, 'Dormilona*'));


/*Async Await */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello World'), 3000)
        : reject (new Error ('Test Error'));
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


//Forma más apropiada para usar async await:
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
