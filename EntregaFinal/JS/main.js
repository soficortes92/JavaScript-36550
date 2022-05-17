let jugadores = [];

( async () => {

const { value: email } = await Swal.fire({
  title: 'Input email address',
  input: 'email',
  inputLabel: 'Your email address',
  inputPlaceholder: 'Enter your email address'
})

if (email) {
  Swal.fire(`Entered email: ${email}`)
  jugadores.push(email)
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

console.log(jugadores);

fetch('https://api.pexels.com/v1/photos/4226910%27', {
  headers: {
    Authorization: '563492ad6f91700001000001d280236697fc47159c795c85a229932c',
  },
})
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
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
    console.log(data);
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
    console.log(data);
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
  
let aleatorioGenerado = numAleatorio() 

let partida
  
const btnpiedra = document.getElementById('btnpiedra');

const btnpapel = document.getElementById('btnpapel');

const btntijera = document.getElementById('btntijera');

const seleccionJugador =  document.getElementById('app1');

const seleccionPrograma = document.getElementById('app2');

const resultadoJugada = document.getElementsByClassName('h1');

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
    resultadoJugada.innerHTML = "<h1>PERDISTE</h1>";
  } else if ((seleccionJugador.innerText == "PIEDRA") && (seleccionPrograma.innerText == "TIJERA")) {
    resultadoJugada.innerHTML = "<h1>GANASTE</h1>";
  } else {
    resultadoJugada.innerHTML = "<h1>EMPATASTE</h1>";
  }
}

btnpiedra.addEventListener('click', () => {
  jugadorPiedra();
  programaEscogio();
  resultadoPiedra()
  contenedor2.classList.toggle('contenedor2');
  contenedor3.classList.toggle('contenedor3');
});

btnpapel.addEventListener('click', () => {
  contenedor2.classList.toggle('contenedor2');
  jugadorPapel();
  programaEscogio();
});

btntijera.addEventListener('click', () => {
  contenedor2.classList.toggle('contenedor2');
  jugadorTijera();
  programaEscogio();
});



// btnpapel.addEventListener('click', () => {
//   if (aleatorioGenerado == 1) {
//     alert("Ganaste! La computadora eligió: " + aleatorioGenerado);
// } else if (aleatorioGenerado == 2) {
//     alert("Empataste! La computadora eligió: " + aleatorioGenerado);
// } else {
//     alert("Perdiste! La computadora eligió: " + aleatorioGenerado);
// }
// });

// btntijera.addEventListener('click', () => {
//   if (aleatorioGenerado == 1) {
//     alert("Perdiste! La computadora eligió: " + aleatorioGenerado);
//   } else if (aleatorioGenerado == 2) {
//     alert("Ganaste! La computadora eligió: " + aleatorioGenerado);
//   } else {
//     alert("Empataste! La computadora eligió: " + aleatorioGenerado);
//   }
// });


// partida = confirm("¿Desea se`guir jugando?")
//   if (partida) {
//     entrada = prompt("Elige piedra, papel o tijera:")
//   } while (partida)
//     alert("¡Gracias por jugar!")