const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==========='.green);
    console.log(`==== tabla de ${base} ====`.red);
    console.log(`========`.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
        //data += `${base} * ${i} = ${base*i}\n`;
    }
}

let crearArchivo = (base, limite = 10) => {
    console.log('==========='.green);
    console.log(`==== tabla de ${base} ====`.red);
    console.log(`========`.blue);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un numero la base = ${base}`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) throw reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}