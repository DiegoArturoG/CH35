package controlFlujo;
import java.util.Scanner;
public class FlujoCotrol {

	public static void main(String[] args)
	//debe conincidir la clase con el nombre del documento 
	//Recuerda que para que algo se ejecute, siempre debe de ir el metodo principal
	{
		// TODO Esbozo de método generado automáticamente
		
		//Primero defino una variable de tipo string donde se almacena un dato 
		
		String viaje = "16-02-24"; //Dejo en null y despues agrego fecha 
		//Variable declarada e inicializada en null a proposito, para tener un "espacio" de memoria ya asignado, y despues reemplazar por el dato nuevo.
		
		//Para validar si podemos viajar en cierta fecha 
		
/*	if (viaje != null) {
		//Varialble vacia 
		System.out.println("Ya no tenemos fechas disponibles, so sorry!");
	} else {
		System.out.println("Puede reservar su viaje"); 
	} */
	
	//Validción de contraseña 
/*	Scanner scanner= new Scanner(System.in);
	
	//Solicita una primera contraseña 
	System.out.println("Ingrese la contraseña: ");
	String contraseña1 = scanner.nextLine(); 
	
	//Solicita la segunda contraseña
	System.out.println("Ingrese la contraseña nuevamente: ");
	String contraseña2 = scanner.nextLine(); 
	
	  if (contraseña1.equals(contraseña2)) {
          System.out.println("Las contraseñas coinciden. Acceso permitido.");
      } else {
          System.out.println("Las contraseñas no coinciden. Acceso denegado.");
      }

      // Cerrar el scanner
     scanner.close(); */
     
	/////////////////////////////////
     
     //Switch para seleccionar comida de la dulceria de un cine
     
     //Seleccion de opciones, varialble que almacena dicha opción 
	
     
     //Crear un menu 
     
     System.out.println("Bienvenido a la dulcería");
     System.out.println("****** MENU *****");
     System.out.println("1. Palomitas");
     System.out.println("2. Nachos");
     System.out.println("3. Chocolates");
     System.out.println("4. HotDog");
     System.out.println("5. Pagar");
     
     Scanner scanner= new Scanner(System.in);
     System.out.println("Ingrese un producto: ");
     int menu = scanner.nextInt();
   
     switch (menu) {
     case 1:
    	 System.out.println("Agregaste opción 1. Palomitas");//Agregamos opción y mensaje
    	 break;
     case 2: 
    	 System.out.println("Agregaste opción 2. Nachos");
    	 break;
     case 3: 
    	 System.out.println("Agregaste opción 3. Chocolates");
    	 break;
     case 4: 
    	 System.out.println("Agregaste opción 4. HotDog");
    	 break;
     case 5: 
    	 System.out.println("Ha seleccionado pagar su combo");
    	 System.out.println("No contamos con esa opción en nuestro menu, opción no valida");
    	 break; 
     default:
    	 System.out.println("Por el momento no contamos con esa opción");
    	 break;
     }//Fin to switch
     
     scanner.close();
     
}
}
