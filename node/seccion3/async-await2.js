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
    salario: 2000
}];

let getEmpleado = async(id) => {
    // promesas: ejecutan un trabajo sincrono o asincrono y despues de que se resulva la tarea realiza un trabajo en particular


    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id
    });

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`);
    } else {
        return empleadoDB;
    }




}

let getSalario = async(empleado) => {



    let salarioEmpleado = salarios.find(salario => {
        return salario.id === empleado.id
    });

    console.log('salario empleado obj', salarioEmpleado);

    if (!salarioEmpleado) {
        throw new Error(`No existe un salario para el usuario ${empleado.nombre}`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioEmpleado.salario,
            id: empleado.id
        });
    }


}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    // console.log(resp);
    return ` ${resp.nombre } tiene un salario de ${resp.salario}`;
}


getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));