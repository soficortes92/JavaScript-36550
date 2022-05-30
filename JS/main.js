// Se crea un array vacio para guardar objeto jugador

let jugadores = [];

let partidaGanada = 0;

let partidaPerdida = 0;

// Funcion que guarda en localStorage

function storage (email) {
  jugadores.push(new Jugador (email))
  localStorage.setItem('jugador', JSON.stringify(jugadores));
}

// Funcion que se inicia automaticamente 

( async () => {

const { value: email } = await Swal.fire({
  title: 'Ingresá tu email para jugar',
  input: 'email',
  inputPlaceholder: 'email@email.com'
})

if (email) {
  Swal.fire(`Email ingresado: ${email}`)
  storage (email);
  abrirNotificacion();
}
})()

function abrirNotificacion() {
  Toastify({
    text: 'El usuario ya esta listo para jugar',
    duration: 3000,
    offset: {
      x: 100,
      y: 10,
    },
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
  }).showToast();
}

localStorage.getItem('jugador') != null
  ? (jugadores = JSON.parse(localStorage.getItem('jugador')))
  : (jugadores = []);

class Jugador {
  constructor(email) {
    this.mail = email;
    this.partidasJugadas = 0;
    this.partidasGanadas = 0;
    this.partidasPerdidas = 0;
  }
}

// Consumo de API

fetch('https://api.pexels.com/v1/photos/1628230', {
  headers: {
    Authorization: '563492ad6f91700001000001d280236697fc47159c795c85a229932c',
  },
})
.then((resp) => resp.json())
.then((data) => {
  const btnPiedra = document.getElementById('btnpiedra');
  let imagenPiedra= `<img src=${data.src.small}>`;
  btnPiedra.innerHTML += imagenPiedra;
});

fetch('https://api.pexels.com/v1/photos/963048', {
  headers: {
    Authorization: '563492ad6f91700001000001d280236697fc47159c795c85a229932c',
  },
})
.then((resp) => resp.json())
.then((data) => {
  const btnPapel = document.getElementById('btnpapel');
  let imagenPapel= `<img src=${data.src.small}>`;
  btnPapel.innerHTML += imagenPapel;
});

fetch('https://api.pexels.com/v1/photos/4226911', {
  headers: {
    Authorization: '563492ad6f91700001000001d280236697fc47159c795c85a229932c',
  },
})
.then((resp) => resp.json())
.then((data) => {
  const btnTijera = document.getElementById('btntijera');
  let imagenTijera= `<img src=${data.src.small}>`;
  btnTijera.innerHTML += imagenTijera;
});

// Declaración de constantes

const btnpiedra = document.getElementById('btnpiedra');

const btnpapel = document.getElementById('btnpapel');

const btntijera = document.getElementById('btntijera');

const seleccionJugador =  document.getElementById('app1');

const seleccionPrograma = document.getElementById('app2');

const btnContinuar = document.getElementById('contenedor4');

// Declaración de funciones

function numAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * 3 + 1)
  if (numeroGenerado == 1) {
    return "PIEDRA"
  } else if (numeroGenerado == 2) {
    return "PAPEL"
  } else {
    return "TIJERA"
  }
}

function jugadorPiedra () {
  seleccionJugador.innerText = "PIEDRA"
}

function jugadorPapel () {
  seleccionJugador.innerText = "PAPEL"
}

function jugadorTijera () {
  seleccionJugador.innerText = "TIJERA"
}

function programaEscogio (){
  seleccionPrograma.innerText = numAleatorio() 
}

function resultadoPiedra (){
  if ((seleccionJugador.innerText == "PIEDRA") && (seleccionPrograma.innerText == "PAPEL")) {
    document.getElementById("contenedor3").innerHTML = "<h1>PERDISTE</h1>";
    partidaPerdida++ 
  } else if ((seleccionJugador.innerText == "PIEDRA") && (seleccionPrograma.innerText == "TIJERA")) {
    document.getElementById("contenedor3").innerHTML = "<h1>GANASTE</h1>";
    partidaGanada++ 
  } else {
    document.getElementById("contenedor3").innerHTML = "<h1>EMPATAMOS</h1>";
  }
}

function resultadoPapel (){
  if ((seleccionJugador.innerText == "PAPEL") && (seleccionPrograma.innerText == "PAPEL")) {
    document.getElementById("contenedor3").innerHTML = "<h1>EMPATAMOS</h1>"; 
  } else if ((seleccionJugador.innerText == "PAPEL") && (seleccionPrograma.innerText == "TIJERA")) {
    document.getElementById("contenedor3").innerHTML = "<h1>PERDISTE</h1>";
    partidaPerdida++ 
  } else {
    document.getElementById("contenedor3").innerHTML = "<h1>GANASTE</h1>";
    partidaGanada++ 
  }
}

function resultadoTijera (){
  if ((seleccionJugador.innerText == "TIJERA") && (seleccionPrograma.innerText == "PAPEL")) {
    document.getElementById("contenedor3").innerHTML = "<h1>GANASTE</h1>";
    partidaGanada++ 
  } else if ((seleccionJugador.innerText == "TIJERA") && (seleccionPrograma.innerText == "TIJERA")) {
    document.getElementById("contenedor3").innerHTML = "<h1>EMPATAMOS</h1>";
  } else {
    document.getElementById("contenedor3").innerHTML = "<h1>PERDISTE</h1>";
    partidaPerdida++ 
  }
}

function recarga () {
  window.location.reload()
}

function nuevaPartida (){
  partidaPerdida = 0;
  partidaGanada = 0;
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
  contenedor4.classList.toggle('contenedor4');
  Swal.fire({
    title: '¿Querés jugar una nueva partida?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('¡Continuemos!', '', 'success')
    } else if (result.isDenied) {
      recarga()
    }
  })
}

function obtenerResultado (){
  if (partidaGanada == 2){
    Swal.fire('¡Felicidades! Ganaste la partida')
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasGanadas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
    setTimeout(nuevaPartida, 4000);
  } 
  if (partidaPerdida == 2){
    Swal.fire('¡Seguí intentando! Esta vez perdiste la partida')
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasPerdidas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
    setTimeout(nuevaPartida, 4000);
  }
}

// Inicio de partida

btnpiedra.addEventListener('click', () => {
  jugadorPiedra();
  programaEscogio();
  resultadoPiedra();
  obtenerResultado();
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
  contenedor4.classList.toggle('contenedor4');
});

btnpapel.addEventListener('click', () => {
  jugadorPapel();
  programaEscogio();
  resultadoPapel ();
  obtenerResultado ();
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
  contenedor4.classList.toggle('contenedor4');
});

btntijera.addEventListener('click', () => {
  jugadorTijera();
  programaEscogio();
  resultadoTijera();
  obtenerResultado ();
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
  contenedor4.classList.toggle('contenedor4');
});

btnContinuar.addEventListener('click', () => {
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
  contenedor4.classList.toggle('contenedor4');
})