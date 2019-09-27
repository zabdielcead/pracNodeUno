/*
Archivos y comandos

para crear el package.json es con npm init

luego 
npm install --save yargs 
npm install --save colors

se resume con esto
npm install --save yargs colors


*/
const argv = require('./config/yargs').argv;
// const argv = require('yargs').argv;
console.log(argv);
let comando = argv._[0];
console.log('escribio=', comando);
switch (comando) {
    case 'crear':
        console.log('crear por hacer');
        break;
    case 'listar':
        console.log('listar por hacer');
        break;
    case 'actualizar':
        console.log('actualizar por hacer');
        break;
    default:
        console.log('comando no reconocido');
        break;
}

/*
   comando ejemplo entra al switch
   node app crear
   node app listar
   node app actualizar


  node app crear

    salida: 

    Crear un elemento por hacer

    Opciones:
    --version          Muestra número de versión                        [booleano]
    --help             Muestra ayuda                                    [booleano]
    --descripcion, -d  Descripcion de la tarea por hacer               [requerido]

    Falta argumento requerido: descripcion

    node app crear -d 'hola'
    salida:
    { _: [ 'crear' ], d: 'hola', descripcion: 'hola', '$0': 'app' }
escribio= crear
crear por hacer




*/