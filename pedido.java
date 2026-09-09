public class Pedido{
    private int id; 
    private String direccion de entrega; 
    private String estado; 

    public void marcarComoEntregado(){
        if(this.estado!="EN_RUTA"){
            mensajeaUsuario("El pedido no puede ser entregado, por que aun no esta en ruta");
        }
        else{
            this.estado="Entregado";
        }
    }
    public int getId(){
        return this.id;
    }
    public void enviarPedido(int idCliente,int peso, String Descripcion){
        //enviar pedido
    }
}