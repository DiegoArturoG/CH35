package org.generation.figuras;

/************Clase Circulo ***********/
public class Circulo extends figuras {
	private double radio;

	public Circulo(double radio) {
		super();
		this.radio = radio;
	}
	
	@Override
	public double calcularArea() {
		return Math.PI * radio * radio;
	}
}

//falta instanciar el circulo 