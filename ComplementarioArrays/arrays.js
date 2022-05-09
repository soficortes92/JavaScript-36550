// // // //Se crea array con objetos
const productos = [ 
    {nombre: "chipa", precio: 120, stock: 100}, 
    {nombre: "chocotorta", precio: 750, stock: 20}, 
    {nombre: "lemon pie", precio: 4000, stock: 10} ];

let seguirComprando = false;
let carrito = [];

do{
    seguirComprando=false;
    carrito.push(prompt("¿Qué producto desea comprar?"));
    if(confirm("¿Desea seguir comprando?")) {
        seguirComprando=true;
    }
    } while (seguirComprando)

console.log(carrito);