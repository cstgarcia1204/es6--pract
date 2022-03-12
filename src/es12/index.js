//es12 - 2021
//replace all

const miString = 'La Lula es muy dormilona, comelona y dormilona';
const replacedMiString = miString.replace('dormilona', 'juguetona');
console.log(replacedMiString); //Resultado: La Lula es muy juguetona, comelona y dormilona
const replacedMiString2 = miString.replaceAll('dormilona', 'juguetona');
console.log(replacedMiString2);//Resultado : La Lula es muy juguetona, comelona y juguetona


// #   métodos privados
class Message {
    #show(val) {
        console.log(val);
    };
    // get #add(val) { en los getters y setters tmb se agrega simbolo #
    //     ...
    // }
}

const message = new Message();
message.show('Holaaa!!');


//promise any  gestiona la respuesta primera que sea respuesta satisfactoria

const promise1 = new Promise ((resolve, reject) => reject('aqui reject de promise 1'));
const promise2 = new Promise ((resolve, reject) => resolve('aqui resolve de promise 2'));
const promise3 = new Promise ((resolve, reject) => reject('aqui resolve de primise 3'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));//Resultado: aqui resolve de promise 2


//weak ref   evitar que este elemento sea recogido por el manejador de basura

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}

//operadores lógicos nuevos o combinación nueva
let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 &&= isFalse1);//Resultado: false

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);//Resultado: true

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);// Resultado : false

//es.ness    version en desarrollo
//comite de desarrollo para llevar a la siguiente version el comite tiene este nombre tc39 y la web es -> tc39.es
// mes de lanzamiento es en Junio de cada año