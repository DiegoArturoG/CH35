package org.generation.overloading;

import java.math.BigDecimal;

public class SumaMain {
	public static void main(String[] args) {
		//Invocamos el método de tipo static mediante su clase 
		int suma1 = Suma.sumar(8, 5);
		double suma2 = Suma.sumar(4.3, 6.26);
		
		//Para imprimir BigDecimal, debemos de guardar los valores de los parametros en objetos de tipo BigDecimal y asignarlos como argumentos de String de cadena nueva instancia 
		
		BigDecimal num1= new BigDecimal ("4.3");//Objeto instanciado
		BigDecimal num2= new BigDecimal ("6.26");//Objeto instanciado 
		
		BigDecimal suma3 = Suma.sumar(num1, num2);
		
		System.out.println("La suma de enteros nos da " +suma1);
		System.out.println("La suma de decimales me da " +suma2);
		System.out.println("La suma exacta con BigDecimal me da " +suma3);
	}
	
	
	
	
 
}
