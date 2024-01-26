package loops;

public class Continue {

	public static void main(String[] args) {
		/*
		 * Instrucciones de salto 
		 * continue -- interrumpe la iteración del bucle, si se procede con una condicion especifica y continua con la siguiente. 
		 * */
		// Con continue; ejecutar una secuencia condicional, cumpliendo la condición del bucle for. 
		
		for (int cliente = 1; cliente <=20; cliente ++) {
			if (cliente == 4) {
				System.out.println("Cliente numero: "+cliente + " Ganaste!!");
			continue;
			} 
			
			System.out.println("Eres el cliente nuemor: "+cliente);
			
		}

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	}

}
