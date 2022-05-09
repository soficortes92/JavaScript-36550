const jugadores = [];

class Jugador {
    constructor (name, apellido) {
        this.nombre = name;
        this.apellido = apellido;
        this.partidasJugadas = 0;
        this.partidasGanadas = 0;
        this.partidasPerdidas = 0;
    }
}

// Los parametros de partidasJugadas, partidasGanadas y partidasPerdidas van a ser incluídas mas adelante del curso.

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
jugadores.push(new Jugador(nombre, apellido)); 
console.log(jugadores);
let entrada = prompt("Elige piedra, papel o tijera:")

function numAleatorio() {
    return Math.floor(Math.random() * 3 + 1)
}
  
const aleatorioGenerado = numAleatorio()
let partida

do {
    switch (entrada) {
        case "piedra":
            if (aleatorioGenerado == 1) {
                alert("Empataste! La computadora eligió: " + aleatorioGenerado);
            } else if (aleatorioGenerado == 2) {
                alert("Perdiste! La computadora eligió: " + aleatorioGenerado);
            } else {
                alert("Ganaste! La computadora eligió: " + aleatorioGenerado);
            }
            break;
        case "papel":
            if (aleatorioGenerado == 1) {
                alert("Ganaste! La computadora eligió: " + aleatorioGenerado);
            } else if (aleatorioGenerado == 2) {
                alert("Empataste! La computadora eligió: " + aleatorioGenerado);
            } else {
                alert("Perdiste! La computadora eligió: " + aleatorioGenerado);
            }
            break;
        case "tijera":
            if (aleatorioGenerado == 1) {
                alert("Perdiste! La computadora eligió: " + aleatorioGenerado);
            } else if (aleatorioGenerado == 2) {
                alert("Ganaste! La computadora eligió: " + aleatorioGenerado);
            } else {
                alert("Empataste! La computadora eligió: " + aleatorioGenerado);
            }
            break;
        default: 
            alert("Debes ingresar piedra, papel o tijera.")
            break;
    }
    partida = confirm("¿Desea seguir jugando?")
    if (partida) {
        entrada = prompt("Elige piedra, papel o tijera:")
    } 
} while (partida)

alert("¡Gracias por jugar!")