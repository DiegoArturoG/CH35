package org.generation.employee;

public class Employee {

	private String nombreCompleto;
	private int id;
	private double salario;
	private String puesto;
	//Contructor 
	
	public Employee(String nombreCompleto, int id, double salario, String puesto) {
		super();
		this.nombreCompleto = nombreCompleto;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}
	
	//Declarar metodos 
	public void trabajar() {
		System.out.println(this.nombreCompleto+"   esta trabajando");
	}
	public void calcularSalario() {
		System.out.println("El salario base del empleado  " +this.nombreCompleto+ " es de $ "+this.salario);
	}
	public void capacitarse() {
		System.out.println("Los empleados con puesto de "+this.puesto +" se capacita");
	}
	
	public void infoGeneral() {
		System.out.println("Id "+this.id+ " Nombre: "+this.nombreCompleto+ " Puesto "+this.puesto+ " Salario: "+ this.salario);
	}

	public String getNombreCompleto() {
		return nombreCompleto;
	}

	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}

	
	//getters and setters 
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public double getSalario() {
		return salario;
	}
	
	public void setSalario(double salario) {
		this.salario = salario;
	}
	
	public String getPuesto() {
		return puesto;
	}
	
	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}

	@Override
	public String toString() {
		return "Employee [nombreCompleto=" + nombreCompleto + ", id=" + id + ", salario=" + salario + ", puesto="
				+ puesto + "]";
	}
	
}
