function checkBackend() {
    fetch('http://localhost:5000/health')  
        .then(response => response.json())  
        .then(data => {
            document.getElementById('status').innerText = data.message;  
        })
        .catch(error => {
            document.getElementById('status').innerText = "Backend is down!";
            alert("Backend connection failed!");  
        });
}

setInterval(checkBackend, 5000); 

