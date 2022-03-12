//importar de forma dinámica
const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const modulo = await import('./file.js');
    modulo.hello();
});


//bigInt  -  Trabajar con número mayores a 2^53
const aBigNumber = 9007199254740991n; // se agrega n al final para resaltar la funcion de manejo de números grandes
const anotherBigNumber = BigInt(9007199254740991); //la otra forma para manejar números grandes utilizando BigInt

console.log(aBigNumber);
console.log(anotherBigNumber);


/// Promise all settled

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response)); /* Resultado:
[
  { status: 'rejected', reason: 'reject' },
  { status: 'fulfilled', value: 'resolve' },
  { status: 'fulfilled', value: 'resolve 1' }
]
    
*/




//global this proporciona una forma estándar para acceder al valor global
console.log(window);
console.log(globalThis);

// operador lógico para manejar null 

const foo= null ?? 'default string';
console.log(foo);// Resultado : default string

const foo2= 'otro string' ?? 'default string';
console.log(foo2);// Resultado: otro string

//Optional Chaining  (?)  No rompe el codigo por completo ya que es opcional
const user = {};
console.log(user?.profile?.email); // Resultado: undefined

if (user?.profile?.email){
    console.log('email'); //Resultado: undefined
}else {
    console.log('fail');// Resultado: fail
}
