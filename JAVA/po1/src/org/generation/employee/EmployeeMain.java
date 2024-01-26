package org.generation.employee;

public class EmployeeMain {
    public static void main (String[] args) {
    	
    	//Instanciar objetos 
    	
    	Employee Diego = new Employee("Diego", "Rodriguez", "Desarrollador Jr.", 3459, 8500);
    	
    	
    	
    	System.out.println(Diego);
    	
// Aplicando métodos definidos previamente 
    	
    Diego.infoGeneral();
    Diego.calcularSalario();
    Diego.capacitarse();
    
// Utilizar información especifica de cada objeto mediante sus propiedades
    
    System.out.println(Diego.getNombre()+ "" +Diego.getApellido() + "Ocupa el puesto de "+Diego.getPuesto());
    
    //Accediendo a la propiedade del objeto 
    System.out.println(Diego.puesto + "gana $" +Diego.salario + " pesos");
    	
    //Alcualizando información mediante Setter
    Diego.setSalario(25500.89);
    Diego.calcularSalario();
    	
    	
    	
    	
    }
}
