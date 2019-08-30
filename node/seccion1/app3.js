console.log('Inicio del programa');

setTimeout(function() {
    console.log('Timeout 1');

}, 3000);
setTimeout(function() {
    console.log('Timeout 2');

}, 0);
setTimeout(function() {
    console.log('Timeout 3');

}, 0);

console.log('FIN del programa');

/* node app3.js 
Inicio del programa
FIN del programa
Timeout 2
Timeout 3
Timeout 1


ciclo de vida en un proceso
pila de procesos - call stack
ejecuta el main que tiene todas las lineas de codigo
    en app.js va linea por linea

en app2.js
el main
luego registra la function saludar
luego dispara la funcion saludar

en app3.js
el main
console log
registra el settimeout1 no la ejecuta la registra pero no la elimina
la coloca en Node APIS la deja hasta despues de tres segundos
el segundo timeout no la ejecuta inmediatamente la registra en NODE APIS
el TERCER timeout no la ejecuta inmediatamente la registra en NODE APIS

LUEGO LOS MANDA COLA DE CALLBACKS
PERO PRIMERO TIENE QUE LEER TODO EL CODIGO DEL PROGRAMA



pila de procesos  <-> Node Apis <-> cola de callbacks
------ para reiniciar nodemon dist
metemos rs

*/