

//Diego Arturo González Rodriguez 4/5

package com.generation;


import java.util.Scanner;//se agrego para insertar texto

public class Codigo4 {

	public static void main(String[] args)  {
    	
    	// se agrego piblic static void para que funcione el programa
        Scanner sNew = new Scanner(System.in);//Se agrega el scanner para iniciar 

        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = sNew.nextLine();

        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = sNew.nextLine();
        int g = 2;

        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            switch (j1) {
                case "piedra":
                    //add equals
                    if (j2.equals("tijeras")) {
                        g = 1;
                    }
                    break;

                case "papel":
                    //add equals
                    if (j2.equals("piedra")) {
                        g = 1;
                    }
                    break;

                case "tijera":
                    if (j2.equals("papel")) {
                        g = 1;
                    }
                    break;
                    
                default:
                	System.out.println("Entrada no valida");            }
        }
        System.out.println("Gana el jugador" +g);
        sNew.close();
    }
}