/*const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

    */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //importar multiplicar.js
const argv = require('./config/yargs').argv;
const colors = require('colors');


//let base = '8';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear archivo');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`)).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv);

let argv2 = process.argv; // process es un variable global 
console.log(argv.base);
console.log(argv.limite);
//console.log(argv2);


// console.log(argv2);
// let parametro = argv2[2];
// console.log(parametro);
// let base = parametro.split('=')[1];
// console.log(base);



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));



/*
    node index listar --base 5
    la salida es: 
    { _: [ 'listar' ], base: 5, '$0': 'index' }
    [ 'C:\\Program Files\\nodejs\\node.exe',
        'C:\\Users\\carteagad\\Documents\\tutoriales\\node\\node1\\pracNodeUno\\node\\seccion4b\\index',
        'listar',
        '--base',
    '5' ]

    node index listar -b 5

    node index --limite=20 --base=50

    node index listar --help

    node index crear --limite 5 -b 3


    // colores en consola npm 
    npm install colors --save
    https://www.npmjs.com/package/colors
*/