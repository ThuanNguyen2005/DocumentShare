document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        const icon = themeToggle.querySelector("i");
        
        function updateIcon(theme) {
            if (theme === "light") {
                icon.className = "bi bi-moon-stars-fill";
            } else {
                icon.className = "bi bi-sun-fill";
            }
        }
        
        // Initialize icon state
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        updateIcon(currentTheme);
        
        // Toggle theme on click
        themeToggle.addEventListener("click", function () {
            const activeTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", activeTheme);
            localStorage.setItem("theme", activeTheme);
            updateIcon(activeTheme);
        });
    }
});
