  
  // Fonctionnalité Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  
    const icon = document.getElementById("dark-mode-icon");
    if (document.body.classList.contains("dark-mode")) {
      icon.textContent = "🌙"; // Lune
    } else {
      icon.textContent = "☀️"; // Soleil
    }
  };
  
  // Ajouter un bouton pour le Dark Mode
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.style.position = "fixed";
    button.style.top = "10px";
    button.style.right = "10px";
    button.style.zIndex = "1000";
    button.style.fontSize = "20px";
    button.style.border = "none";
    button.style.background = "none";
    button.style.cursor = "pointer";
  
    const icon = document.createElement("span");
    icon.id = "dark-mode-icon";
    icon.textContent = "☀️"; // Soleil par défaut
    button.appendChild(icon);
  
    button.addEventListener("click", toggleDarkMode);
    document.body.appendChild(button);
  
    // Styles pour le Dark Mode
    const style = document.createElement("style");
    style.textContent = `
      .dark-mode {
        background-color: #121212;
        color: #ffffff;
      }
    `;
    document.head.appendChild(style);
  });

  
  