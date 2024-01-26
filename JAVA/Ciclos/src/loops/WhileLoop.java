package loops;
import java.util.Scanner;

public class WhileLoop {

	public static void main(String[] args) {
	/*
	 * While ejecuta un bloque de codigo hasta que se cumpla una condición dada 
	 * while (Expresión){
	 * Bloque de codigo a ejecutar
	 * (Iterador)
	 * }
	 * */
	/*int cuenta = 0; 
	while (cuenta <10) {
		cuenta ++;
		System.out.println("La cuenta es de "+cuenta);
	}*/

	/*Crear un programa que solicite al usuario un número. Dicho número será tomado como el número final de una cuenta. Dicha cuenta inicia en 1. Debe mostrar en consola la cuenta del 1 hasta el número proporcionado.
	1. Importar un scanner e implementarlo
	2. Un mensaje para darle contexto al usuario
	3. Almacenar el número del usuario en una variable.
	4. Guardar en variable el número que iniciar la cuenta (1)
	5. Implementar un ciclo While
	6. Mostrar por consola el resultado.		
	*/
	
	
	//Solución:
	//1.-
	Scanner sr =new Scanner(System.in);
	//2.-
	System.out.println("Escribe un numero que servira como numero final de una cuenta: ");
	//3.-
	int nFinal = sr.nextInt();
	//4.-
	int nCiclo = 1;
	
	//5.- 
	while (nCiclo <= nFinal) {
		System.out.println("La cuenta va en "+nCiclo);
	nCiclo++;
	}
	sr.close();
	

	
	
	}

}
