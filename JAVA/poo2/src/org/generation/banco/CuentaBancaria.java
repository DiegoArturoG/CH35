package org.generation.banco;

/*
 * Requerimientos; en esta clase se definen los metodos para disparar las Excepciones es decir, el tyr-catch
 * Se definen los metodos depositar dinero, retirar, saldo 
 *             - Trabajar bajo POO
 *             - Encapsular (modificadores, getters y settter
 *             - crear varialbles y metodos para instanciar objetos
 *              
 * */

public class CuentaBancaria {
   private double saldo;
   private int idCuenta;
   
   //Constructor que recibe solamente el atributo numero de cuenta
public CuentaBancaria(int idCuenta) {
	this.idCuenta = idCuenta;
}
   
//Método para depositar dinero 
public void depositar (double monto) {
	saldo += monto; // esto es lo mismo que Saldo= saldo + monto
}
//Método para retirar dinero 
//Verificar si el monto es menor o igual al saldo actual
/*  -True: Se puede retirar el monto solicitado
 *   -False: si es menor no se puede retirar y calculamos cuanto te falta para completar la operación 
 * */
public void retirar (double monto) throws FondosInsuficientesException {
	if (monto <= saldo) {
		saldo -= monto; //Es lo mismo que saldo = saldo - monto; 
	} else {
		double faltante= monto -saldo;
		//Crear la instancia de la clase FondosInsuficientesException con las palablas reservadas thow noe e y le pasamos el parametro correspindiente a la variable que dispare la excepción
		throw new FondosInsuficientesException(faltante); //Esto causa un error porque lo estamos instanciado de manera local y no lo encuentra. Heredar como parte del metodos palabra reservada thrwos y el nombre de la exceptions 
	}
}
//Getters y setters 
public double getSaldo() {
	return saldo;
}

public void setSaldo(double saldo) {
	this.saldo = saldo;
}

public int getIdCuenta() {
	return idCuenta;
}

public void setIdCuenta(int idCuenta) {
	this.idCuenta = idCuenta;
}
   
	
}
