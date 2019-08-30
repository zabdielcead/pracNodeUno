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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id
    })

    console.log('empleado', empleadoDB);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}



let getSalario = (empleado, callback) => {
    let sempleadoName = empleado.nombre;

    let salarioEmpleado = salarios.find(salario => {
        return salario.id === empleado.id
    });

    console.log('salario empleado obj', salarioEmpleado);

    if (!salarioEmpleado) {
        callback(`No existe un salario para el usuario ${sempleadoName}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioEmpleado.salario,
            id: empleado.id
        });
    }


}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    console.log(empleado);
});

getSalario(empleados[0], (err, resp) => {
    if (err) {
        return console.log(err);
    }

    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
});