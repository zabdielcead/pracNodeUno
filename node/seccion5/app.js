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
const colors = require('colors');

const porHacer = require('./task/task');
// const argv = require('yargs').argv;
console.log(argv);
let comando = argv._[0];
console.log('escribio=', comando);
switch (comando) {
    case 'crear':
        console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log('tarea', tarea);
        break;
    case 'listar':
        console.log('listar por hacer');
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('====Por hacer ======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==============='.green);
        }


        break;
    case 'actualizar':
        console.log('actualizar por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('actualizado = ', actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log('borrado = ', borrado);
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