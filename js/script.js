const opcionPc = ['piedra', 'papel', 'tijera']
let puntosJugador = 0;
let puntosPc = 0;

const botones = document.querySelectorAll('.boton-jugada');

const resultadosDiv = document.getElementById('resultados');
const contadorJugador = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');


function eleccionJugadaPc(){const indiceAleatorio = Math.floor(Math.random() * opcionPc.length );
  return opcionPc [indiceAleatorio];
 }





botones.forEach((boton) =>{
  boton.addEventListener('click', () =>{
    const jugadaJugador = boton.dataset.jugada;
    const jugadaPc = eleccionJugadaPc();
    const resultados = obtenerResultado(jugadaJugador, jugadaPc);
    mostrarResultado(resultados, jugadaJugador,jugadaPc);
    renovarPuntuacion(resultados);
}) ;
});


function obtenerResultado (jugadaJugador, jugadaPc) {
  if (jugadaJugador === jugadaPc) {
    return 'Empate';
  } else if (
    (jugadaJugador === 'piedra' && jugadaPc === 'tijera'), 
    (jugadaJugador === 'papel' && jugadaPc === 'piedra'),
    (jugadaJugador === 'tijera' && jugadaPc === 'papel') )
    { return 'Ganaste';}
    else {
      
      return 'Perdiste';
    };
};

function mostrarResultado(resultados, jugadaJugador, jugadaPc) {
  resultadosDiv.innerHTML = `Has elegido: ${jugadaJugador} <br>  
  Pc ha elegido: ${jugadaPc} <br>
  resultado = ${resultados}`;
}

function renovarPuntuacion(resultados){
if (resultados === 'Ganaste'){
puntosJugador ++;
contadorJugador.textContent = `Tus puntos : ${puntosJugador}`;
} else if (resultados === 'Perdiste'){
  puntosPc ++;
  contadorOrdenador.textContent = `Puntos del Pc: ${puntosPc}`;
}

}


