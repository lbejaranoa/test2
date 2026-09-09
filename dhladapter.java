public class dhlAdaptador extends Pedido{
    public void enviarPedido(int idCliente,int peso, String Descripcion){
        dhl.registrarPedido(idCliente,peso,descripcion); 
    }
}