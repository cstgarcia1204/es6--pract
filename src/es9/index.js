//Operador de reposo para separar los elementos

const conductor = {
    nombre: 'Angie',
    plataforma: 'Didi',
    viajes: 5000,
    auto: 'Ignis',
    colorAuto: 'Rojo'
};

let { nombre, ...all } = conductor;
console.log(nombre, all);
console.log(all);

let { auto, ...todoLoDemas } = conductor;
console.log(todoLoDemas);
console.log(auto);

//propiedades de propagación | En este caso se unen ob1 en ob2 con el operardor propagación
const mascotaDatos1 = {
    nombre: 'Lula',
    edad: 5,
};

const mascotaTodosDatos = {
    ...mascotaDatos1,
    raza: 'Maltipu',
    color: 'blanca'
};
console.log(mascotaTodosDatos); //Resultado: { nombre: 'Lula', edad: 5, raza: 'Maltipu', color: 'blanca' }


// finally permite ejecutar un bloque de código según sea el caso para las promesas

const helloMundo = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hola Mundo en españool!!'), 3000)
        : rejec(new Error('Test Error'))
    });
};

helloMundo()
    .then(response => console.log(response))
    .catch(reject => console.log(reject))
    .finally(() => console.log('Finalizó'))



//Regex la mejora es para poder acceder a bloques de regex y poder acceder a cada uno de ellos

//Ejemplo de constitucion para manejar las fechas empezando por el año(4dígitos)/ mes(2dígitos) / día(2 dígitos)
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2017-11-06');
const anio = match[1];
const mes = match[2];
const dia = match[3];

console.log(anio, mes, dia); //Resultado : 2017 11 06
