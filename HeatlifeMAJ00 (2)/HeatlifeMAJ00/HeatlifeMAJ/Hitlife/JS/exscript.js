document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === 'user@example.com' && password === 'password') {
                localStorage.setItem('loggedInUser', JSON.stringify({ email: email }));
                window.location.href = '../HTML/dashboard.html'; 
            } else {
                document.getElementById('message').textContent = 'Email ou mot de passe incorrect';
                document.getElementById('message').style.color = 'red';
            }
        });
    }

    const registerForm = document.getElementById('registerForm');
    const messageDiv = document.getElementById('message');
    
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            messageDiv.textContent = "Les mots de passe ne correspondent pas.";
            messageDiv.style.color = "red";
            return;
        }
        
        const user = {
            username: username,
            email: email,
            password: password
        };
        
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        messageDiv.textContent = "Inscription réussie. Redirection...";
        messageDiv.style.color = "green";
        
        setTimeout(function() {
            window.location.href = 'dashboard.html'; 
        }, 2000);
    });
    
    const authActionsDiv = document.getElementById('auth-actions');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Afficher les informations de l'utilisateur et le bouton de déconnexion
        authActionsDiv.innerHTML = `
            <span>Bienvenue, ${loggedInUser.username} (${loggedInUser.email})</span>
            <a href="#" class="logout-button" onclick="logout()">Déconnexion</a>
        `;
    } else {
        // Afficher le bouton de connexion
        authActionsDiv.innerHTML = `
            <a href="login.html" class="login-button">Se connecter</a>
        `;
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Redirection vers la page de connexion
}

document.addEventListener('DOMContentLoaded', function() {
    const authActionsDiv = document.getElementById('auth-actions');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
       
        authActionsDiv.innerHTML = `
            <span class="welcome-message">Bienvenue, <span classe="username">${loggedInUser.username}</span></span>
            <a href="#" class="logout-button" onclick="logout()">Déconnexion</a>
        `;
    } else {
        
        authActionsDiv.innerHTML = `
            <a href="login.html" class="login-button">Se connecter</a>
        `;
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../HTML/index.html'; 
}


