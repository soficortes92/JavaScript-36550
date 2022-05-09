//Se generan las variables 

let otroProducto = false;
let precio = 0;
let total = 0;

//Se crean las funciones

function agregarAlCarrito() {
    do {
        let producto = prompt("¿Querés comprar torta, brownie o chipa por docena?", "Ej: torta");
        let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));
        switch (producto) {
            case "torta":
                precio = 1000;
                break;
            case "brownie":
                precio = 420;
                break;
            case "chipa por docena":
                precio = 300;
                break;
            default:
                alert("Algunos de los datos ingresados no son correctos");
                precio = 0;
                cantidad = 0;
        }
        total = total + precio * cantidad;
        otroProducto = confirm("¿Queres agregar otro producto?")
    } while (otroProducto);
    console.log(total);
}

function descuento(total) {
    if (total >= 3000) {
        total = total * 0.90;
        alert("El total de tu compra es $" + total)
    }
    return total
}

agregarAlCarrito();
descuento(total);