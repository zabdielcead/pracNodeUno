const fs = require('fs');
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: true,

    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const cargarDB = () => { // funcion que no recibe ningun argumento
    try {

        listadoPorHacer = require('../db/data.json'); // leer el archivo json
        console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }

};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}