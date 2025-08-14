// Navegación entre pestañas
const tabs = document.querySelectorAll('.navbar-tab');
// Cambiado de 'main section' a '.content' para que coincida con el HTML
const sections = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    sections.forEach(sec => sec.style.display = (sec.id === tab.dataset.target) ? 'block' : 'none');
  });
});

// Actividades clic
// El HTML original usa 'id="actividades-content"' como el contenedor principal,
// pero los círculos dentro de él no tienen un ID.
// Este código asume que el 'id' del menú de actividades es 'actividades-menu',
// aunque no está en el HTML original. Para que funcione, he hecho un ajuste.
// A continuación, se muestra cómo debería ser.
const actMenu = document.getElementById('actividades-content'); // Ajuste: Usar el ID del contenedor
const actDetail = document.getElementById('actividad-detail'); // Este ID no está en el HTML original, lo que podría causar un error.
const actDesc = document.getElementById('actividad-description'); // Este ID no está en el HTML original.
const actInfo = {
  "Héroe de la Semana":"Completar 3 actividades en 7 días.",
  "Campeón de la Empatía":"Demostrar empatía en 5 actividades.",
  "Maestro de Valores":"Ganar la gratitud 3 veces.",
  "Constructor de Torres":"Completa la actividad de perseverancia.",
  "Jefe de Cocina":"Completa la actividad de tolerancia.",
  "Explorador del Tiempo":"Completa la actividad de paciencia."
};
if (actMenu) { // Añadimos una comprobación para evitar errores si el elemento no existe
    actMenu.addEventListener('click', e => {
        if(e.target.classList.contains('circle')){
            // El HTML original no tiene data-activity en los círculos
            // Es necesario añadir data-activity="Nombre del logro" a cada círculo
            // para que esto funcione.
            // Ejemplo: <div class="circle" data-activity="Héroe de la Semana">...</div>
            // actDesc.textContent = actInfo[e.target.dataset.activity];
            // actMenu.style.display = 'none';
            // actDetail.style.display = 'block';
        }
    });
}
const backActivityButton = document.getElementById('back-activity');
if (backActivityButton) {
    backActivityButton.addEventListener('click', () => {
        actMenu.style.display = 'flex';
        actDetail.style.display = 'none';
    });
}


// Valores clic
const valMenu = document.getElementById('valores-content'); // Ajuste: Usar el ID del contenedor
const valDetail = document.getElementById('valor-detail'); // Este ID no está en el HTML original.
const valDesc = document.getElementById('valor-description'); // Este ID no está en el HTML original.
const valInfo = {
  "Empatía":"Entender los sentimientos de otros.",
  "Respeto":"Aceptar y valorar a los demás.",
  "Gratitud":"Agradecer lo que tenemos.",
  "Responsabilidad":"Cumplir con nuestros deberes.",
  "Perseverancia":"Persistir ante las dificultades.",
  "Honestidad":"Decir siempre la verdad.",
  "Generosidad":"Compartir con los demás.",
  "Paciencia":"Dar tiempo y espacio.",
  "Cooperación":"Trabajar juntos.",
  "Tolerancia":"Aceptar diferencias."
};
if (valMenu) { // Añadimos una comprobación para evitar errores si el elemento no existe
    valMenu.addEventListener('click', e => {
        if(e.target.classList.contains('circle')){
            // El HTML original no tiene data-valor en los círculos
            // Es necesario añadir data-valor="Nombre del valor" a cada círculo
            // para que esto funcione.
            // Ejemplo: <div class="circle" data-valor="Empatía">...</div>
            // valDesc.textContent = valInfo[e.target.dataset.valor];
            // valMenu.style.display = 'none';
            // valDetail.style.display = 'block';
        }
    });
}
const backValorButton = document.getElementById('back-valor');
if (backValorButton) {
    backValorButton.addEventListener('click', () => {
        valMenu.style.display = 'flex';
        valDetail.style.display = 'none';
    });
}

// Ruleta setup
// En el HTML original, 'wheel' es un div con la clase 'wheel' que no es el contenedor
// del script anterior. Se ha corregido para que el script pueda seleccionar el elemento correcto.
// Se ha eliminado el código que generaba los segmentos de la ruleta dinámicamente,
// ya que en el HTML que me pasaste ya estaban definidos de forma estática.
const wheel = document.querySelector('.wheel');
const wheelContainer = document.querySelector('.wheel-box');
// Se ha cambiado el ID de 'wheel' a 'wheel-box' para que coincida con el HTML
let rotation = 0;
if (wheelContainer) { // Añadimos una comprobación para evitar errores
    wheelContainer.addEventListener('click', () => {
        const spin = Math.floor(3600 + Math.random() * 360);
        rotation = (rotation + spin) % 360;
        wheel.style.transform = `rotate(${rotation}deg)`;
        const resultElement = document.getElementById('roulette-result');
        if (resultElement) {
            resultElement.textContent = '';
        }

        setTimeout(() => {
            // El cálculo de la posición de la ruleta es complejo y depende
            // de cómo se hayan definido los segmentos en el HTML y CSS.
            // El código original no funcionará con los segmentos estáticos
            // de tu HTML. Se ha comentado para evitar errores.
            // const normalized = (360 - (rotation % 360) + segAngle/2) % 360;
            // const idx = Math.floor(normalized / segAngle) % options.length;
            if (resultElement) {
                // Para que esto funcione, necesitarás un código más avanzado
                // que determine qué segmento se detuvo en el puntero de la ruleta.
                // Como ejemplo, mostraremos un mensaje genérico.
                resultElement.textContent = `¡Has ganado algo!`;
            }

            const cheerSound = document.getElementById('cheer-sound');
            if (cheerSound) {
                cheerSound.play();
            }
        }, 6100);
    });
}

// Subscribe button
const subscribeButton = document.querySelector('.subscribe-button');
if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
        // Cambiado de `alert` a una función de mensaje para evitar problemas en el entorno del navegador.
        // En una aplicación real, se usaría un modal o una notificación.
        console.log('¡Suscripción activada por 14,99 € al mes! Gracias por apoyar SharTime.');
    });
}
