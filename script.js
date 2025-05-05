document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send this data to a server
    console.log('Login attempt:', { username, password });
    
    // For demo purposes, just show an alert
    alert('Login functionality would be implemented here. Check console for details.');
});

// Load configuration
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        console.log('App config loaded:', config);
    })
    .catch(error => {
        console.error('Error loading config:', error);
    });
