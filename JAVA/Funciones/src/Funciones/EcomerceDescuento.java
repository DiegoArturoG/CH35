package Funciones;
import java.util.Scanner;

public class EcomerceDescuento {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//Obtener el precio del producto
		System.out.println("Ingresa el costo del producto: ");
		double precioProducto = scanner.nextDouble();
		
//Obtener % de descuento		
		double porcentajeDescuento = 15;
		double descuento = calDescuento(precioProducto,porcentajeDescuento);
		
//Obtener % de Impuesto		
		double porcentajeImpuesto = 3;
		double impuesto= calImpuesto(precioProducto,porcentajeImpuesto);

//Obtener el total
		double total = calTotal(precioProducto,descuento,impuesto);
		
total = redondear(total,2); 
      
	System.out.println("Precio del producto: "+precioProducto);	
	System.out.println("Porcentaje de descuento aplicado: "+descuento);	
	System.out.println("Porcentaje de impuesto aplicado: "+impuesto);
	System.out.println("Precio a pagar: "+total);	
	
	}
	
	
static double calDescuento (double precioProducto, double procentajeDescuento){
		return (precioProducto *procentajeDescuento)/100;
	}
static double calImpuesto(double precioProducto, double procentajeImpuesto) {
	return (precioProducto*procentajeImpuesto)/100;
}
static double calTotal (double precioProducto, double descuento, double impuesto) {
	return (precioProducto-descuento) + impuesto;
}
static double redondear (double valor, int decimales) {
     double factor= Math.pow(10, decimales);
     return Math.round(valor*factor)/factor;
      }
//Para este ejemplo puedo refactorizar porcentaje de impuesto y de descuento en una sola función 
}

/*
 La refactorizacion es reestructurar código que ya existe sin alterar su comportamiento. Tiene como objetivo mejorar la legibilidad, mantenibilidad y optimizacion de nuestro codigo

 */
