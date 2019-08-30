let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melisa'
}, {
    id: 3,
    nombre: 'Juan'
}];


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    nombre: 2000
}];

let getEmpleado = (id) => {
    // promesas: ejecutan un trabajo sincrono o asincrono y despues de que se resulva la tarea realiza un trabajo en particular

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id
        });

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }

    });



    /*
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id
    })

    console.log('empleado', empleadoDB);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
    */
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let sempleadoName = empleado.nombre;

        let salarioEmpleado = salarios.find(salario => {
            return salario.id === empleado.id
        });

        console.log('salario empleado obj', salarioEmpleado);

        if (!salarioEmpleado) {
            reject(`No existe un salario para el usuario ${sempleadoName}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioEmpleado.salario,
                id: empleado.id
            });
        }

    });
}

getEmpleado(1).then(empleado => {
    console.log('Empleado de BD', empleado);
    getSalario(empleado).then(resp => {
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}`);
    }, err => {
        console.log('error en salario:', err);
    });
}, (err) => {
    console.log('error', err);
});