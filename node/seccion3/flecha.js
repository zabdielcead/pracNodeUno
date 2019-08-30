function sumar(a, b) {
    return a + b;
}


// flecha

let sumars = (a, b) => {
    return a + b;
}

let saludar = () => {
    return 'holamundi';
}

let saludars = nombre => {
    return `Hola ${nombre}`;
}

console.log(sumar(10, 20));

/*

para ejcutarlo es con nodemon
nodemon flecha.js


*/


let deadpool = {
    nombre: 'WADE',
    apellido: 'WINSTON',
    poder: 'REGENERACION',
    //getNombre: () => { //this de la funcion de flecha apunta afura del objeto de deadpool
    //  return `${this.nombre} ${ this.apellido } - poder: ${this.poder}`
    // se dejaria asi

    getNombre() {
        return `${this.nombre} ${ this.apellido } - poder: ${this.poder}`;
    }

}


console.log(deadpool.getNombre());