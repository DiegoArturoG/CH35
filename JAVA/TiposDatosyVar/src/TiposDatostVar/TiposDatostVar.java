package TiposDatostVar;

public class TiposDatostVar {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
System.out.println("Hola Mundo");
		
		
/*Comentarios
  multilinea*/

//comentarios de una sola linea 

byte edad = 15;//Sirve para representar un numero entero 8bits (-128 al 127)

System.out.println("Edad del participante"+edad);

short usuariosNuevos = 200;//Sirve para representar un numero entero 16 bits (-23768 al 32767)

System.out.println("Usuarixs nuevos" +usuariosNuevos);

int usuariosTotales = 8752;// sirve para representar un numero entero 32 bits (-2147483648 al 2147483647)

System.out.println("Usuarios Totales "+usuariosTotales);
		
long usuariosPremium = 9752;// sirve para representar un numero entero con valores mucho mayores

System.out.println("Usuarios Premium "+usuariosPremium);
	
 
//Tipos de datos con numero decimales 

		float altura = 1.61f;//Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
		
		System.out.println("Altura del usuarix "+altura);
		
		double peso = 68.400;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
		
       System.out.println("Su peso es de "+peso);
       
String nombreUsuario = "Diego"; //Es una clase para tener cadenas de texto

System.out.println("Usuario "+nombreUsuario);

char seccion= 'f' ;
System.out.println("Usuario premium "+seccion);

boolean clienteFrecuente = true; 
System.out.println("Es un cliente frecuente "+clienteFrecuente);

//Conversión de tipos 

//Casteo a entero 

int pesoCambio = (int) peso;

//Casteo entero 
long pesoCambio1 = (long) peso;
System.out.println("double "+peso);
System.out.println("int "+pesoCambio);
System.out.println("long "+pesoCambio1);

String costoBoleto = "500";//Es una clase para tener cadenas de texto
String zonaBoleto = "52";

int nombreCam = Integer.parseInt(costoBoleto);

System.out.println("Usuarix "+costoBoleto);
 

/*Operadores aritmeticos 
+ suma
- resta
* multiplicacion
/ division
 % Residuo*/


/*Operadores de compararcion 
 == compara si un opernado es igual a otro 
 != compara si es diferente 
 <  mayor que 
 >  menor que 
 <= mayor o igual que 
 >= menor o igual que */

//Programa para un cine 
double precioEnt = 75.5;
double prePalomitas =89.7;
double precioBeb = 35.5;
double capTotal =500;

int personasDentro= 342;

if (personasDentro > capTotal) {
	
	System.out.println("Lo lamento, no puedes entrar");

}

double totalEnt = personasDentro * capTotal;
double totalPal= personasDentro * prePalomitas;
double totalBeb = personasDentro * precioBeb;
System.out.println("Tu total vendido es de "+(totalEnt+totalPal+totalBeb)); 
	}

}
