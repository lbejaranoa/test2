const formulario = document.querySelector('form');
const tablaBody = document.querySelector('table tbody');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Detiene el refresco de página

    // Captura los valores usando los id exactos de tu HTML
    const tipoDoc = document.getElementById('tipoDocumento').value;
    const numDoc = document.getElementById('numDocumento').value;
    const nombre = document.getElementById('nombreCliente').value;
    const email = document.getElementById('emailCliente').value;
    const direccion = document.getElementById('direccionCliente').value;

    // Genera la fila estructurada
    const nuevaFila = `
        <tr>
            <td><strong>${tipoDoc}:</strong> ${numDoc}</td>
            <td>${nombre}</td>
            <td>${email}</td>
            <td>${direccion}</td>
            <td>
                <button class="btn btn-sm btn-warning">Editar</button>
            </td>
        </tr>
    `;

    // Lo inserta al final de la tabla
    tablaBody.insertAdjacentHTML('beforeend', nuevaFila);

    // Limpia las cajas de texto
    formulario.reset();
});