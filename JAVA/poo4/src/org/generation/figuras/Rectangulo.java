package org.generation.figuras;

public class Rectangulo extends figuras{
	//Atributos que se definen para rectangulo y que podemos crear gracias a la abstracción 
	private double base;
	private double altura;
	public Rectangulo(double base, double altura) {
	
		this.base = base;
		this.altura = altura;
	}
	//Impementando el método abstracto de figura. Buena practica es indicar el metodo abstracto con notacion override
	@Override
	public double calcularArea() {
		return base*altura;
	}
	public static void main(String[] args) {
		Rectangulo rectangulo = new Rectangulo(5,3);
		System.out.println("El area del rectangulo es "+rectangulo.calcularArea()+ " metros");
	rectangulo.infoFigura();
	}
}
