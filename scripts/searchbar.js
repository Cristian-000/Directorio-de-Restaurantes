document.addEventListener("DOMContentLoaded", () => {
document.getElementById("search-bar").addEventListener("input", filterDropdown);

function filterDropdown() {
var input, filter, dropdown, options, a, i;
input = document.getElementById("search-bar");
filter = input.value.toUpperCase();
dropdown = document.getElementById("localidades-dropdown");

// Aseguramos que el elemento se haya encontrado antes de continuar
if (dropdown) {
    options = dropdown.getElementsByTagName("a");

    for (i = 0; i < options.length; i++) {
        a = options[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            a.style.display = "";  // Mostrar elementos que coinciden
        } else {
            a.style.display = "none";  // Ocultar elementos que no coinciden
        }
    }
}
}
});