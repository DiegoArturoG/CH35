package org.generation.employee.developer;

public class DeveloperMain {
	public static void main(String[] agrs) {
	Developer Baruch = new Developer("Baruch Moreno", 41805, 18560,"Programador","JAVA");
	
	System.out.println(Baruch);
	Baruch.calcularSalario();
	Baruch.codear();

}
}