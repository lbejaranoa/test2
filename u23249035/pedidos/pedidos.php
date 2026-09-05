<?php
// Módulo de pedidos - Integrante D
// Sistema de pedidos: caso guiado - control de versiones en equipo

class Pedido {
    public int $id;
    public string $cliente;
    public array $productos;
    public string $estado;

    public function __construct(int $id, string $cliente, array $productos) {
        $this->id = $id;
        $this->cliente = $cliente;
        $this->productos = $productos;
        $this->estado = "pendiente";
    }
}

class GestorPedidos {
    private array $pedidos = [];
    private int $siguienteId = 1;

    public function crearPedido(string $cliente, array $productos): Pedido {
        $pedido = new Pedido($this->siguienteId, $cliente, $productos);
        $this->pedidos[$pedido->id] = $pedido;
        $this->siguienteId++;
        return $pedido;
    }

    public function obtenerPedido(int $id): ?Pedido {
        return $this->pedidos[$id] ?? null;
    }

    public function listarPedidos(): array {
        return array_values($this->pedidos);
    }

    public function actualizarEstado(int $id, string $estado): bool {
        if (!isset($this->pedidos[$id])) {
            return false;
        }
        $this->pedidos[$id]->estado = $estado;
        return true;
    }

    public function eliminarPedido(int $id): bool {
        if (!isset($this->pedidos[$id])) {
            return false;
        }
        unset($this->pedidos[$id]);
        return true;
    }
}
