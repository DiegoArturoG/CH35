package org.generation.banco;

//En esta clase se define los metodos que arroja excepciones siemore que la clase cajero se dispare dicha excepcion 
/*
 * Requerimientos: 
 *       1.- Trabajar bajo el paradijma POO
 *       2.- Indicar que la clase es una Excepción
 *       3.- Crear variables y métodos para instanciar objetos
 *       4.- Encapsular 
 * */

public class FondosInsuficientesException extends Exception {
	
	private static final long serialVersionUID = 1L;
	
	//Atributos 
	private double monto;
	
	//Constructor
	public FondosInsuficientesException(double monto) {
		this.monto = monto;
	}
	
	//getters y setter
	public double getMonto() {
		return monto;
	}

	public void setMonto(double monto) {
		this.monto = monto;
	}
	

}
