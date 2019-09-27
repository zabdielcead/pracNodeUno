/*
let getNombre = async() => {

        // desencadenar un error 
        throw new Error('No exite un nombre para un usuario');

        return 'CEAD';
    }
    
    // async es una promesa  y ahorra codigo 

*/


let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Fernando')
        }, 3000)

    })
}

let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${ nombre }`
}

saludo().then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    });