package OperadoresLogicos;

public class OperadoresLogicos {

	public static void main(String[] args) {
		// TODO Esbozo de método generado automáticamente
/* && operador And devuelve true si ambas expresiones son verdaderas 
 * || operador or devuelve true si almenos una delas dos condiciones se cumple
 * ! operador not si la expresion boolens es flasa devuelve true y viceversa 
 */
	
		//&& and 
		int años= 5;
		boolean esInfante= true;
		boolean costoInfante= años <= 12 && esInfante;
		System.out.println("Es peque " + costoInfante);
		
		
		
		String cliente ="cliente123";
		String credenciales = "DieLLeguin2332";
		
		boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("DieLLeguin2332");
		System.out.println("Las credenciales son validas "+credencialCorrecta);
		
		//  || or 
		
		double costoPasaje= 380.50;
		boolean inapam = false;
		int edad = 58; 
		
		boolean decuentoAdultoM = edad >=60 || inapam;
		System.out.println("Tiene descuento? "+ costoPasaje);
		
		//! Not 
		boolean asientosDisponibles = true; 
		boolean disponibles = true;
		boolean asientosConDescuento= !disponibles;
		System.out.println("Tenemos asientos con descuento "+asientosConDescuento);
		
		int boleto = 350;
		int asientos = 62; 
		int asientosAm= 4;
		int asientosEs= 6;
		int totalPasajeros= 50;
		boolean disponiblesAutobus= true;
		double inapamD= .35;
		double estudiantesD =.20;
		
		
		
		
		if (totalPasajeros >= asientos) {
			
			System.out.println("Lo lamento, no tenemos lugares disponibles");}
		
		System.out.println("Tenemos asientos en el autobus");
		
		double totalBoletosv= totalPasajeros * boleto;
		System.out.println("Tu total de boletos vendidos es " +totalBoletosv);
		
	
		

		
		
		
				
		
		
	}

}
