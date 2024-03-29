package org.generation.banco;
/*
 * En cajero se instancia el objeto de tipo cuenta bancaria y se invocan los metodos definidos 
 * Aqui se establecen los try catch de las excepciones previamente definidad en cuenta Bancaria 
 * Los resultados los muestra en consola 
 * 
 * */

public class Cajero {
public static void main(String[] args) {
	CuentaBancaria cuentaMia= new CuentaBancaria(43125);//Cuenta bancaria con su idCuenta
	//Simulamos que tenemos un sccaner e introduce money
	System.out.println("Depositando $500");
	cuentaMia.depositar(500);
	
	//Revisar si se actualizo en deposito 
	System.out.println("El nuevo saldo es: "+cuentaMia.getSaldo());
	
	//retirar dinero 
	try {
		//Simulación de sccaner para retiro
		System.out.println("Retirando $300");
		cuentaMia.retirar(300);
		System.out.println("El nuevo saldo es: "+cuentaMia.getSaldo());
		
		System.out.println("Retirando $300");
		cuentaMia.retirar(200);
		System.out.println("El nuevo saldo es: "+cuentaMia.getSaldo());
		
		System.out.println("Retirando $300");
		cuentaMia.retirar(250);
		System.out.println("El nuevo saldo es: "+cuentaMia.getSaldo());
	} catch (FondosInsuficientesException e) {
		System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
		e.printStackTrace();//Metodo de excepciones que imprime el seguimiento del flujo de la exception
	}
	
  }
}
