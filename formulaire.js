// script.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupérer les valeurs des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Réinitialiser le message d'erreur
    errorMessage.textContent = '';

    // Vérification simple
    if (!name || !email || !password) {
        errorMessage.textContent = 'Veuillez remplir tous les champs.';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        return;
    }

    // Si tout est valide
    alert('Inscription réussie !');

    // Réinitialiser le formulaire
    document.getElementById('signupForm').reset();
});
