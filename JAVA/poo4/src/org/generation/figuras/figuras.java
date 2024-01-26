package org.generation.figuras;

/*
 * Figura sera un suoerclase abstracta que contiene un metodo abs, implementado por sus subclases
 * 
 * Rectangulo y circulo son subclase que reciben el metodo de figura
 * 
 * Mala practica: instanciar los objetos dentro de la misma clase 
 * */

//Con abstrac le digo a JAva que mi clase es abstracta 
abstract class figuras {
	//Método abs para calcular el área
	public abstract double calcularArea();
	//Método concreto para imprimir inf sobre la figura 
	public void infoFigura() {
		System.out.println("Esta es una figura");
	}

	
	
	
	
	
	
	
	
	
	
}
