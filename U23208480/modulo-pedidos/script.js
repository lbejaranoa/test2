const STORAGE_KEY = "pedidos_u23208480";

const form = document.getElementById("form-pedido");
const tabla = document.querySelector("#tabla-pedidos tbody");
const totalGeneralEl = document.getElementById("total-general");

function obtenerPedidos() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function guardarPedidos(pedidos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos));
}

function renderizarPedidos() {
  const pedidos = obtenerPedidos();
  tabla.innerHTML = "";
  let totalGeneral = 0;

  pedidos.forEach((pedido, index) => {
    const subtotal = pedido.cantidad * pedido.precio;
    totalGeneral += subtotal;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${pedido.cliente}</td>
      <td>${pedido.producto}</td>
      <td>${pedido.cantidad}</td>
      <td>S/ ${pedido.precio.toFixed(2)}</td>
      <td>S/ ${subtotal.toFixed(2)}</td>
      <td><button class="eliminar" data-index="${index}">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  });

  totalGeneralEl.textContent = totalGeneral.toFixed(2);
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nuevoPedido = {
    cliente: document.getElementById("cliente").value.trim(),
    producto: document.getElementById("producto").value.trim(),
    cantidad: Number(document.getElementById("cantidad").value),
    precio: Number(document.getElementById("precio").value),
  };

  const pedidos = obtenerPedidos();
  pedidos.push(nuevoPedido);
  guardarPedidos(pedidos);
  renderizarPedidos();
  form.reset();
});

tabla.addEventListener("click", (evento) => {
  if (!evento.target.classList.contains("eliminar")) return;

  const index = Number(evento.target.dataset.index);
  const pedidos = obtenerPedidos();
  pedidos.splice(index, 1);
  guardarPedidos(pedidos);
  renderizarPedidos();
});

renderizarPedidos();
