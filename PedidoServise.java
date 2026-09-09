public class PedidoService {

    public void registrarPedido(String cliente, double total) {

        if (total <= 0) {
            System.out.println("Error: el total debe ser mayor a cero.");
            return;
        }

        System.out.println("Pedido registrado correctamente");
        System.out.println("Cliente: " + cliente);
        System.out.println("Total: S/ " + total);
    }

    public static void main(String[] args) {
        PedidoService service = new PedidoService();
        service.registrarPedido("Empresa ABC", 1500);
    }
}