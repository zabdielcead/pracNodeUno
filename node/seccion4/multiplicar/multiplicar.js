const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un numero la base = ${base}`);
            return;
        }


        let data = '';

        for (let i = 1; i <= 10; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw reject(err);
            else resolve(`tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo
}