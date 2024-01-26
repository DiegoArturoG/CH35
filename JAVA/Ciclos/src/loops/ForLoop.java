package loops;

public class ForLoop {

	public static void main(String[] args) {
		/*
		 * El ciclo For, nos proporciona una forma compacta de iterar sobre valores.
		 * for (Inicialización; condición; contador 
		 * (Incremento /Decremento){
		 * Bloque de codigo
		 * }
		 * */
		//for con variable local
		for (int numero = 0; numero <= 10; numero ++ ) {
			System.out.println("numero es igual a "+numero);
		}
		System.out.println("******Variable global***");
//for con variable global 
		int contador; 
		for (contador = 1; contador <=5; contador ++) {
			System.out.println("Numero es igual: "+contador);
		}
		//Buclue dentro de otro bucle (anidados)
		//Imprime un triangulo con asteriscos 
		System.out.println("******Bucles anidados***");
		
		int filas = 5;
		for (int i=0; i <filas; i++) {
		for (int j = 0; j <= i; j++) {
			System.out.print("*");
		}	
		System.out.println();
		}
		
		
		
		
	}

}
