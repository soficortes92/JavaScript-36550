let jugadores = [];

( async () => {

const { value: email } = await Swal.fire({
  title: 'Ingresa tu correo electrónico',
  input: 'email',
  inputPlaceholder: 'email@email.com'
})

if (email) {
  Swal.fire(`Email ingresado: ${email}`)
  jugadores.push(new Jugador (email))
  localStorage.setItem('jugador', JSON.stringify(jugadores));
  abrirNotificacion();
}
})()

localStorage.getItem('jugador') != null
  ? (jugadores = JSON.parse(localStorage.getItem('jugador')))
  : (jugadores = []);

class Jugador {
  constructor(email) {
    this.mail = email;
    this.partidasJugadas = 0;
    this.partidasGanadas = 0;
    this.partidasPerdidas = 0;
    this.partidasEmpatadas = 0;
  }
}

// Los parametros de partidasJugadas, partidasGanadas y partidasPerdidas van a ser incluídas mas adelante del curso.

function abrirNotificacion() {
  Toastify({
    text: 'El jugador fue cargado con éxito',
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

fetch('https://api.pexels.com/v1/photos/4226910%27', {
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

  fetch('https://api.pexels.com/v1/photos/2363901', {
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

  fetch('https://api.pexels.com/v1/photos/8823492', {
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

let partida

let aleatorioGenerado = numAleatorio() 
  
const btnpiedra = document.getElementById('btnpiedra');

const btnpapel = document.getElementById('btnpapel');

const btntijera = document.getElementById('btntijera');

const seleccionJugador =  document.getElementById('app1');

const seleccionPrograma = document.getElementById('app2');

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
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasPerdidas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  } else if ((seleccionJugador.innerText == "PIEDRA") && (seleccionPrograma.innerText == "TIJERA")) {
    document.getElementById("contenedor3").innerHTML = "<h1>GANASTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasGanadas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  } else {
    document.getElementById("contenedor3").innerHTML = "<h1>EMPATASTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasEmpatadas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  }
}

function resultadoPapel (){
  if ((seleccionJugador.innerText == "PAPEL") && (seleccionPrograma.innerText == "PAPEL")) {
    document.getElementById("contenedor3").innerHTML = "<h1>EMPATASTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasEmpatadas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  } else if ((seleccionJugador.innerText == "PAPEL") && (seleccionPrograma.innerText == "TIJERA")) {
    document.getElementById("contenedor3").innerHTML = "<h1>PERDISTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasPerdidas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  } else {
    document.getElementById("contenedor3").innerHTML = "<h1>GANASTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasGanadas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  }
}

function resultadoTijera (){
  if ((seleccionJugador.innerText == "TIJERA") && (seleccionPrograma.innerText == "PAPEL")) {
    document.getElementById("contenedor3").innerHTML = "<h1>GANASTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasGanadas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  } else if ((seleccionJugador.innerText == "TIJERA") && (seleccionPrograma.innerText == "TIJERA")) {
    document.getElementById("contenedor3").innerHTML = "<h1>EMPATASTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasEmpatadas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  } else {
    document.getElementById("contenedor3").innerHTML = "<h1>PERDISTE</h1>";
    jugadores[(jugadores.length - 1)].partidasJugadas++;
    jugadores[(jugadores.length - 1)].partidasPerdidas++;
    localStorage.setItem('jugador', JSON.stringify(jugadores));
  }
}

function recarga () {
  window.location.reload()
}

function nuevaPartida() {
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
  Swal.fire({
    title: '¿Deseas seguir jugando?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Continuemos con el juego', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Partida finalizada', '', 'error')
      setTimeout(recarga, 2000);
    }
  })
}

btnpiedra.addEventListener('click', () => {
  jugadorPiedra();
  programaEscogio();
  resultadoPiedra();
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
  setTimeout(nuevaPartida, 2000);
});

btnpapel.addEventListener('click', () => {
  jugadorPapel();
  programaEscogio();
  resultadoPapel ();
  setTimeout(nuevaPartida, 2000);
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
});

btntijera.addEventListener('click', () => {
  jugadorTijera();
  programaEscogio();
  resultadoTijera();
  setTimeout(nuevaPartida, 2000);
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
});