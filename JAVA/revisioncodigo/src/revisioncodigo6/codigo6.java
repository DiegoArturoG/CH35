package revisioncodigo6;
import java.util.Scanner;//Importar scanner
public class codigo6 {
    public static void main(String[] args) {
		  
	  
    int[] n = new int[20]; //agregar new para el nuevo entrero  

    for (int i = 0; i < 20; i++) {
      n[i] = (int)(Math.random() * 381) + 20;
      System.out.print(n[i] + " ");//Escribir bien el system
    }
    
    System.out.print("\n¿Qué números quiere resaltar? \n opcion 1: los múltiplos de 5 \n opcion 2: los múltiplos de 7  "); //Se cambio en System por uno solo que engloba las dos opciones
    //int opcion = Integer.parseInt(System.console().readLine());
    Scanner scanner = new Scanner(System.in); //Cambiar por la linea 16  e inicializar scanner 
    int opcion = scanner.nextInt();

    int multiplo = (opcion == 1) ? 5 : 7;

    for(int e : n) {//El ciclo es for 
      if (e % multiplo == 0) {
        System.out.print("[" + e + "] ");
      } else {
        System.out.print(e + " ");//Rescribir en forma correcta 
       }
    }
    scanner.close();//Cerrar scanner
  } 
}    
  

 
