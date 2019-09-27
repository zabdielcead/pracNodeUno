// requireds
//const fs = require('fs'); // libreria propia de node
// otros tipos de requires
// const fs = require('express'); libreria por un tercero
//const fs = require('./express'); librerias archivos creados personalemnte

const { crearArchivo } = require('./multiplicar/multiplicar'); //importar multiplicar.js

//let base = '8';


//console.log(process.argv);

let argv = process.argv; // porcess es un variable global 
console.log(argv);
let parametro = argv[2];
console.log(parametro);
let base = parametro.split('=')[1];
console.log(base);



crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e));

/*
requerir paquetes:
https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_file_system



mandar parametros por consola 
node app --base=5
*/