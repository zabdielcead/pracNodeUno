/*
comando a crear 'Crear un elemento por hacer'
    --descripcion -d

comando actualizar 'Actualiza el estado completado de una tarea'    
        --descripcion -d    -> aceptara   --descripcion ó -d
        --completado -c     -> completado --completado ó -c

        --help



*/

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualizar de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualizar de la tarea por hacer'
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}