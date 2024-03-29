package org.generation.excersice;

import java.util.ArrayList;
import java.util.Scanner;
/*
 *Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
 *---Requerimientos
 *    > Utilizar ArrayList
 *    > Scanner para interactuar con el usuario
 *    > Loop para permitir que se agreguen varios estudiantes (do-while)
 *    > Opción para salir del loop con palabra "salir" (if-else, try-catch, !=)
 *    > Mostar lista de estudiantes (for-each)
 * */
public class SistemaEscolar {

	public static void main(String[] args) {
		//Inicializar un ArrayList para guardar a los estudiantes 
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scanner para el ususario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar ususario
		String nombreEstudiante = scanner.nextLine();//Inicializado de manera global y utilizado de manera local 
		
		do {
			System.out.println("Ingresa el nombre del estuduante. Escribe 'Salir' para finalizar");
			
			nombreEstudiante = scanner.nextLine();
			nombreEstudiante = nombreEstudiante.toLowerCase();
			estudiantes.add(nombreEstudiante);
		} while( !nombreEstudiante.equals("salir"));//Siempre que no se escriba salir el loop se sigue ejecutando
		
		//Mostrar losta de estudiantes
		System.out.println("Lista de estudiantes:");
		for(String estudiante: estudiantes) {
             
			if(!estudiante.equals("salir")){             System.out.println(estudiante);		
		}
	}
		/*
		 * Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'.
		 * Agreguar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove();)
		 */
		
		//Eliminar Estudiante 
		String elimEstudiante = scanner.nextLine();
		do {
			System.out.println("Ingresa enombre del estudiante que deseas eliminar o Escribe 'Salir' para finalizar");
			
			elimEstudiante = scanner.nextLine();
			elimEstudiante = elimEstudiante.toLowerCase();
			estudiantes.remove(elimEstudiante);
		} while( !elimEstudiante.equals("salir"));
		
		
		scanner.close();
		
		System.out.println(estudiantes);
		
		
		
	}

}
