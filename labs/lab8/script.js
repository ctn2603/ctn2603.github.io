function toggleTheme() {
    document.querySelector("body").classList.toggle("dark-mode")
}

const toggleButton = document.getElementById("toggleButton")
toggleButton.onclick = toggleTheme