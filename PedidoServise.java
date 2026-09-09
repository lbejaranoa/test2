public class PedidoService {

    public void registrarPedido(String cliente, double total) {

        double igv = total * 0.18;
        double totalConIgv = total + igv;

        System.out.println("Pedido registrado");
        System.out.println("Cliente: " + cliente);
        System.out.println("Subtotal: S/ " + total);
        System.out.println("IGV: S/ " + igv);
        System.out.println("Total: S/ " + totalConIgv);
    }

    public static void main(String[] args) {
        PedidoService service = new PedidoService();
        service.registrarPedido("Empresa ABC", 1500);
    }
}
