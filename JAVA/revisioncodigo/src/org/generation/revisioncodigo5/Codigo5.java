package org.generation.revisioncodigo5;
import java.util.Scanner;//Agregar scanner 


public class Codigo5 {
 public static void main(String[] agrs) {//Arregar la clase 
	    System.out.print("Introduzca un número:");
	    Scanner scanner = new Scanner(System.in);//Refactorizar y cerrar 
	    int ni = scanner.nextInt();//Cambiar la variable de tipo String a Int y el input es NextInt
	    
	    int c = ni; //comentamos esta linea de codigo
	    
	    int afortunado = 0;
	    int noAfortunado = 0;
	    
	    while ( ni > 0) {
		  int digito =  ni % 10;
	      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
			afortunado++;
	      } else {
			noAfortunado++;
	      }//Cerrar else
		  ni /= 10;
	    }
	    if (afortunado > noAfortunado) {
	      System.out.println("El " + c + " es un número afortunado.");//Agregar t al print
	    } else {
	      System.out.println("El " + c + " no es un número afortunado.");
	    }
	    scanner.close();//Cierre del scanner
	  }
	  
	}

