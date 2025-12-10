// Constantes para la animación de butacas
const TOTAL_SEATS = 98; 
const DOCUMENTARY_PERCENT = 0.529;
const NUM_DOCUMENTARIES = Math.round(TOTAL_SEATS * DOCUMENTARY_PERCENT); // = 52

// Esperar a que termine la cuenta regresiva antes de iniciar animaciones
window.addEventListener('countdownComplete', () => {
    console.log('Cuenta regresiva completada, iniciando animaciones');
    
    // Mostrar el logo si existe
    const logo = document.getElementById('logo1');
    if (logo) {
        logo.classList.add('show');
    }
    
    // Iniciar la animación de butacas después de un pequeño delay
    setTimeout(animateSeats, 500);
});

// Función de animación de butacas
function animateSeats() {
    const seats = Array.from(document.querySelectorAll('.seat'));

    // Mezclar los asientos aleatoriamente
    const shuffledSeats = seats.sort(() => Math.random() - 0.5);

    // Identificar los 52 asientos que serán de color blanco (Documentales)
    const seatsToColor = shuffledSeats.slice(0, NUM_DOCUMENTARIES);

    shuffledSeats.forEach((seat, index) => {
        setTimeout(() => {
            // ASIGNACIÓN DE COLOR PERMANENTE
            // Si el asiento está en la lista de los 52 seleccionados aleatoriamente, se vuelve blanco.
            if (seatsToColor.includes(seat)) {
                seat.classList.add('blanca');
            }

            // ANIMACIÓN DE BRILLO
            seat.classList.add('active');
            setTimeout(() => {
                seat.classList.remove('active');
            }, 500);

        }, index * 20);
    });
}