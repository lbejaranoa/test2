let cantidad = 0;
const precioBroaster = 12;

function actualizarPedido() {
    document.getElementById("cantidad").textContent = cantidad;
    document.getElementById("total").textContent = cantidad * precioBroaster;
}

function agregarBroaster() {
    cantidad++;
    actualizarPedido();
}

function quitarBroaster() {
    if (cantidad > 0) {
        cantidad--;
        actualizarPedido();
    }
}