package org.generation.employee.manager;

import org.generation.employee.Employee;

public class Manager extends Employee{

	/*
	 * la clase manager sirve como sublase (Clase hija) por lo tanto debe extender (heredar) desde la superclase (Employee) para poder acceder a los atributos y metodos de la super clase 
	 * 
	 */
	//1.- Arributos
	private int antiguedad;
	private double incremento;
	
	//2.- Constructor NOTA: no podemos definir el incremento porque no conocemos el incremento de cada objeto es decir cada objeto tendra su incremento en un método llamado calcular incremento 
	public Manager(String nombreCompleto, int id, double salario, String puesto, int antiguedad) {
		super(nombreCompleto, id, salario, puesto);
		this.antiguedad = antiguedad;
	
	}
	
	//3- Métodos del usuario
	public void organizarReuniones() {
		System.out.println("El manager "+this.getNombreCompleto()+ "Concova a una reunion");
	}
	//Invocar el método de la superclase que guarda el salario base 
	double salarioBase = super.getSalario();
	
	
	public int getAntiguedad() {
		return antiguedad;
	}
	
	public void setAntiguedad(int antiguedad) {
		this.antiguedad = antiguedad;
	}
	
	public double getIncremento() {
		return incremento;
	}
	
	public void setIncremento(double bono) {
		this.incremento = bono;
	}
	
	public double getSalarioBase() {
		return salarioBase;
	}
	
	public void setSalarioBase(double salarioBase) {
		this.salarioBase = salarioBase;
	}
	//Overriding (aulación de métodos)
	/*En la empresa los Managers reciben un bono de $1000 al cumplir su primer año de antigüedad despues un incremento cada año de $500 .
	 * 
	 * Verificar antiguedad >= 1 true o <= 1 año false 
	 * Crear un método para verificar la antiguedad y calculat el bono a recibir  
	 * */
	public void calcularIncremento () {
		if (this.antiguedad >= 1) {
			double IncrementoTotal = 1000 + (this.antiguedad -1)*500;
			this.setIncremento(IncrementoTotal);
			
		} else {
			this.setIncremento(0);
			System.out.println("No hay bono");
		}
	}
	
	public void calcularSalario() {
		calcularIncremento();
		double salarioManager= salarioBase + this.getIncremento() ; 
		System.out.println("El salario del manager "+ this.getNombreCompleto()+ " es de $" +salarioManager);
	
	}
	
	
	//5.- to String

	@Override
	public String toString() {
		return "Manager [antiguedad=" + antiguedad + ", incremento= " + incremento + ", NombreCompleto: "
				+ getNombreCompleto() + ", Id=" + getId() + ", Salario: " + getSalario() + ", Puesto: "
				+ getPuesto() + "]";
	}
	
}
