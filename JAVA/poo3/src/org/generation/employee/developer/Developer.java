package org.generation.employee.developer;
import org.generation.employee.Employee;
public class Developer extends Employee {
	public String lenguageProgramacion;

	public Developer(String nombreCompleto, int id, double salario, String puesto, String lenguageProgramacion) {
		super(nombreCompleto, id, salario, puesto);
		this.lenguageProgramacion = lenguageProgramacion;
	}

	public String getLenguageProgramacion() {
		return lenguageProgramacion;
	}

	public void setLenguageProgramacion(String lenguageProgramacion) {
		this.lenguageProgramacion = lenguageProgramacion;
	}
	public void codear() {
		System.out.println("El programador "+this.getNombreCompleto()+" utiliza "+this.lenguageProgramacion);
	}

	@Override
	public String toString() {
		return "Developer [Id=" + getId() + ", NombreCompleto=" + getNombreCompleto() + ", Puesto=" + getPuesto() + ", Salario="	+ getSalario() + ", lenguajeProgramacion=" + lenguageProgramacion + "]";
	}


}
