let deadpool = {
    nombre: 'WADE',
    apellido: 'WINSTON',
    poder: 'REGENERACION',
    getNombre: function() {
        return `${this.nombre} ${ this.apellido } - poder: ${this.poder}`
    }



}

console.log(deadpool.getNombre());
/*
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;
Esto es igual a lo de abajo
*/
let { nombre: primernombre, apellido, poder } = deadpool //destructuracion
console.log(nombre, apellido, poder);