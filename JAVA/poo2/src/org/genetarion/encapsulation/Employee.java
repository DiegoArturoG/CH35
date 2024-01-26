package org.genetarion.encapsulation;

/*
 * La escructura básica para crear objetos es la siguiente: 
 *    1.- Atributos o propiedades
 *    2.- Método constructor (1 to n metodos
 *    3.- Métodos del objeto (comportamiento)
 *    4.- Métodos Getters y Setters
 *    5.- Método toString
 * 
 * */

public class Employee {
	// 1.- Encapsular Atributos o propiedades utilizando un modificador private
private	String nombre;
private	String apellido;
private	int id;
private	double salario;
private	String puesto;
	
	//2.- Método constructor. Tiene el mismo nombre que la clase no retorna nada, recibe parametros (atributos) y los aigna a variables del constructor (this)
	
public	Employee(String nombre, String apellido,String puesto, int id, double salario){
		this.nombre = nombre;
		this.apellido = apellido;
		this.salario = salario;
		this.id = id;
		this.puesto = puesto;
	}
	
	// 3.-Métodos de comportamiento
	
public	void trabajar () {
		System.out.println("Estoy trabajando");
	}
	
public	void calcularSalario() {
		System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de " + this.salario + " pesos");
	}
	
public	void capacitarse () {
		System.out.println("El trabajador del puesto "+this.puesto + " se capacita");
	}
	
public	void infoGeneral () {
		System.out.println("id " + this.id + "Nombre; "+ this.nombre + " Apellido; " +this.apellido);
	}

	//4. Getters y Setters.  Son métodos que nos permiten eviar u obtener información que esta protegida por modificadores de acceso y de esta manera interactuar con nuestro objeto. los getters nos permiten obtener info y los setters nos permiten enviar info.
	
	/*
	 * Estructura de getter:
	 *      public tipoDato getNombreVariable ()[
	 *      return nombreVariable
	 *      }
	 *      
	/*
	 * Estructura de Getter:
	 * 		public tipoDato getNombreVariable () {
	 * 			return nombreVariable;
	 * 		}
	 * 		p.e.
	 * 			public String getNombre () {
	 * 				return nombre;	
	 * 			}
	 * Estructura de Setter:
	 * 		public void setNombreVariable (variable) {
	 * 			this.variable = variable;
	 * 		}
	 * 		p.e.
	 * 			public void setNombre (String nombre) {
	 * 				this.nombre = nombre;	
	 * 			}
	 * 
	 * Podemos inicializar Getters y setters dando click derecho> source> generate getters y setters 
	 * 
	 */
	
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getApellido() {
		return apellido;
	}
	
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	
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
	
	
	// 5. Método toString . Es un Override que se refeire a la capacidade de proporcionar info especifica de una clase en forma de cadena de caracteres. nos perimite imprimir nuestro onbetos en forma de cadena Podemos inicializar Getters y setters dando click derecho> source> generate toString
	

	@Override
	public String toString() {
		return "Employee [nombre=" + nombre + ", apellido=" + apellido + ", id=" + id + ", salario=" + salario
				+ ", puesto=" + puesto + "]";
	}
	
	
	
	
	
	
	

}
