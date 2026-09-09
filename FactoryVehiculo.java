public class FactoryVehiculo{
    public Vehiculo FactoryVehiculo(String tipo){
        
        if("Camioneta".equals(tipo)){
            Vehiculo objvehiculo= new Camioneta(); 
            return objvehiculo; 
        }
        if("Moto".equals(tipo)){
            Vehiculo objvehiculo= new Moto(); 
            return objvehiculo; 
        }
        if("Camion".equals(tipo)){
            Vehiculo objvehiculo= new Camion(); 
            return objvehiculo; 
        }
        
    }

}

