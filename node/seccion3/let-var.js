let nombre = 'Wolverine';

if (true) {
    let nombre = 'Magneto';
}

console.log(nombre);

let i;
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}

console.log(i);

/*
para ejecutar el archivo es:
nodemon let-var.js

var nombre = 'Wolverine';

if (true) {
    var nombre = 'Magneto';
}

console.log(nombre);
tiene el nombre de la ultima asignacion
la salida es: Magneto

----------------
let nombre = 'Wolverine';

if (true) {
    let nombre = 'Magneto';
}

console.log(nombre);
la salida es: Wolverine

-----------------

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}

console.log(i);

la salida es: 
i: 0
i: 1
i: 2
i: 3
i: 4
i: 5
6

------------------
let i;
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}

console.log(i);

i: 0
i: 1
i: 2
i: 3
i: 4
i: 5
undefined


*/