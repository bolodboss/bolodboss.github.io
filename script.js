document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // Simple validation
    if(username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    console.log('Login attempt:', { username, password });
    alert('Login functionality would connect to server in real app');
});

// Load config
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        console.log('App config:', config);
    })
    .catch(error => {
        console.error('Error loading config:', error);
    });
