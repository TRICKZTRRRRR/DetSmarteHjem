function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Europe/Copenhagen', hour12: false };
    const danskTid = now.toLocaleTimeString('da-DK', options);

    const clockElement = document.getElementById('clock');
    //clockElement.textContent = `Klokken er ${danskTid}`;
    clockElement.textContent = `${danskTid}`;
}

// Opdater klokken hvert sekund
setInterval(updateClock, 1000);

// Opdater klokken ved siden af sidenavigation
updateClock();

