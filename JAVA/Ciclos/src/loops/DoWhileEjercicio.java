package loops;

import java.util.Scanner;

public class DoWhileEjercicio {

	public static void main(String[] args) {
	
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		System.out.println("Bienvenido al cajero ATM City, Sececciona alguna de las sig. opciones");
		System.out.println("1. Consultar saldo");
		System.out.println("2. Ingresar dineros");
		System.out.println("3. Retirar dineros");
		System.out.println("4. Salir");
		
		
		Scanner scr = new Scanner (System.in);
		System.out.println("Selecciona una opción: ");
		
		int opcion;
		
		do {
			opcion = scr.nextInt();
			
			switch (opcion) {
			
			case 1: System.out.println("Consultar saldo");
			break; 
			
			case 2: System.out.println("Ingresa Money");
			break; 
			
			case 3: 
				System.out.println("Retirar Money");
			break;
			
			case 4:
				System.out.println("Salir");
			break; 
			
			default: 
				System.out.println("Elija una opción valida");
			}
				
		} while (opcion != 4);
		
			
			scr.close();
		
		
		
	}

}
