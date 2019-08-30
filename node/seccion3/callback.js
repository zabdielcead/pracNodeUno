setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);

let getUsuarioByID = (id, callback) => {
    let usuario = {
        nombre: 'FERNANDO',
        id
    }


    // supongamos regresar un error
    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    } else {

        callback(null, usuario);
    }

}

getUsuarioByID(20, (err, usuario) => {
    console.log(err);
    if (err) {
        return console.log(err);
    }

    console.log('usuario de base de datos', usuario);
});

/*
callbacks
*/