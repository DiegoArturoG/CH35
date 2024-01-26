package Funciones;

import java.util.ArrayList;
import java.util.List;


public class Funciones {//Clase para representar un producto
	
	static class Producto {
		String nombre;
		double precio;
		
		Producto (String nombre, double precio){
			this.nombre = nombre;
			this.precio = precio;
			
		}}
	static class carritoCompras{
		List<Producto> productos = new ArrayList <>();
		void agregarProducto(Producto HotWheels) {
			productos.add(HotWheels);
		}
		
	double calTotal() {
		double total= 0;
		for(Producto HotWeels : productos) {
			total += HotWeels.precio;
		}
		return total; 
	}
	
		
	
	}

	public static void main(String[] args) {
		
		Producto carrito1 = new Producto ("Audi R8", 55.99);
		Producto carrito2 = new Producto ("VW Vochito", 45.99);
		
		carritoCompras car = new carritoCompras();
		car.agregarProducto (carrito1);
		car.agregarProducto(carrito2);
		
		double totalCarrito = car.calTotal();
		
		System.out.println("Total del carrito: $ "+totalCarrito);
		
		
	}

}
