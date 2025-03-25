function checkBackend() {
    fetch('http://localhost:5000/health')  // Fetch data from backend API
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            document.getElementById('status').innerText = data.message;  // Update status text
        })
        .catch(error => {
            document.getElementById('status').innerText = "Backend is down!";
            alert("Backend connection failed!");  // Show alert if backend is not reachable
        });
}

setInterval(checkBackend, 5000); // Run check every 5 seconds

