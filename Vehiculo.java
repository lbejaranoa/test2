public abstract class Vehiculo{
    protected String placa; 
    protected double capacidad; 
    protected String Latitud;
    protected String Logintud;
    public void registrarUbicacion(){
        gps.configurarion(exactitud=20);
        latitud=gps.obtenerLatitud();
        longitud=gps.obtenerLatitud();
    }
    public abstract void realizarEntrega();
}