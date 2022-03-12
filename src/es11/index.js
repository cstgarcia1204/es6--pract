//importar de forma dinámica
const button = document.getElementById('btn');

button.addEventListener('click', async function(){
    const modulo = await import('./file.js');
    modulo.hello();
});