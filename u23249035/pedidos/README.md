# Módulo de Pedidos

**Integrante D** — Caso guiado: Sistema de pedidos.

Este módulo gestiona el ciclo de vida de un pedido dentro del sistema:

- `crearPedido(cliente, productos)`: registra un nuevo pedido en estado `pendiente`.
- `obtenerPedido(id)`: devuelve un pedido por su id.
- `listarPedidos()`: devuelve todos los pedidos registrados.
- `actualizarEstado(id, estado)`: cambia el estado de un pedido (ej. `pendiente`, `enviado`, `entregado`).
- `eliminarPedido(id)`: elimina un pedido del sistema.

## Flujo de integración

1. Rama creada desde `develop`: `feature/modulo-pedidos-u23249035`.
2. Cambios desarrollados y commiteados de forma independiente al resto de módulos (README, clientes, productos).
3. Integrado a `develop` mediante merge, verificando que no rompe el trabajo de los demás integrantes.
