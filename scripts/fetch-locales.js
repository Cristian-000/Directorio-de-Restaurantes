document.addEventListener("DOMContentLoaded", () => {  // Cargar el JSON de locales

  fetch('/locales/locales.json')
  .then(response => response.json())
  .then(data => {
      // Filtrar localoes según la localidad actual
      const localidadActual = obtenerLocalidadActual(); // Implementa esta función según tus necesidades
      console.log(localidadActual);

      const localesFiltrados = data.locales.filter(local => local.localidad === localidadActual);

      // Mostrar los locales en el HTML
      mostrarLocales(localesFiltrados);
  })
  .catch(error => console.error('Error al cargar el JSON:', error));

  function obtenerLocalidadActual() {
    // Obtener la URL actual
    const url = window.location.href;

    // Dividir la URL por las barras inclinadas ("/") y extraer el último segmento
    const segments = url.split('/');
    const localidadSegment = segments[segments.length - 1];

    // Eliminar la extensión '.html' si está presente
    const localidad = localidadSegment.replace('.html', '');

    return localidad;
}

function mostrarLocales(locales) {
  const localesListContainer = document.getElementById('locales-list');

  locales.forEach(local => {
    const localLink = `../locales/${local.nombre.replace(/\s+/g, "").toLowerCase()}.html`;
      const localHTML = `
          <div id="targeta-local">
              <h2>${local.nombre}</h2>
              <p>Dirección: ${local.direccion}</p>
              <p>Teléfono: ${local.telefono}</p>
              <p>Tipo: ${local.tipo}</p>
              <a href="${localLink}" target="_blank">Ir al local</a>
          </div>
      `;

      console.log(localLink)
      localesListContainer.innerHTML += localHTML;
  });
}
});