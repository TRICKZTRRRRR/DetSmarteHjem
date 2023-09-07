// Function to fetch and display data
function fetchData() {
    fetch('output.txt') // Update the path to match your file location
        .then(response => response.text())
        .then(data => {
            const lines = data.trim().split('\n');
            const values = lines.map(line => parseFloat(line));
            
            if (values.length > 0) {
                const latestValue = values[values.length - 1];
                if (!isNaN(latestValue)) {
                    if (latestValue >= 1) {
                        document.getElementById('.boxLeft').innerText = `Latest Data: ${latestValue}`;
                    } else {
                        document.getElementById('.boxLeft').innerText = 'You are too close to me';
                    }
                } else {
                    document.getElementById('.boxLeft').innerText = 'Invalid data';
                }
            } else {
                document.getElementById('.boxLeft').innerText = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call fetchData initially on page load
document.addEventListener('DOMContentLoaded', fetchData);

// Set up a timer to call fetchData every 1 second (1000 milliseconds)
setInterval(fetchData, 10);