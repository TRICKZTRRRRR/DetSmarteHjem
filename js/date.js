function updateDate() {
    const now = new Date();
    
    const dateElement = document.getElementById('date');

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Måneder er nul-baseret, derfor +1
    const year = now.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    //dateElement.textContent = `Dato: ${formattedDate}`;
    dateElement.textContent = `${formattedDate}`;
}

// Opdater datoen ved siden af sidenavigation
updateDate();
