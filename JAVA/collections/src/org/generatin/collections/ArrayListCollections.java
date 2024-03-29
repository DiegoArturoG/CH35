package org.generatin.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		//~~~~~~~ Array ~~~~~~~//
		String[]names = {"Diego", "Rocio", "Aldo", "Rey","Arturo","Karen"};
		//Imprimir Arrays
		System.out.println(Arrays.toString(names));
		int[] edades= {12,34,43,32,21,65,54};
		System.out.println(Arrays.toString(edades));
		//Aceder a cada elemento del Array
		String name1= names[0];
		System.out.println("El nombre es: "+name1);
		int edad1= edades[4];
		System.out.println("El nombre es  "+name1+ " y tiene "+edad1 +" años");
		
		//Obtener la longitud del Array
		int longitudNames = names.length;
		System.out.println("El array names tiene "+longitudNames+ " Elementos");
		
		//Obtener el ultimo elemento 
		String ultiElemento = names[longitudNames -1];
		System.out.println("El ultimo elemto de Array es: "+ultiElemento);
		
		//Mostrar cada elemento utilizando forEach
		for (String name: names) {
			System.out.println(name);
		}
		
		//************* ArrayList******//
		
		//ArrayList es un array que puede cambiar de tamaño, es la clase de java que representa la estructura de datos de Arrays. permite elementos duplicados y recibe varios metodos para su manipulación 
		
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<>();
		ArrayList<Character> characters= new ArrayList<>();
		
		//Agregar elementos 
		films.add("Se7ven");
		films.add("FastandFurios");
		films.add("Pulp fiction");
		films.add("Mr Nobody");
		films.add("Inception");
		films.add("The Shining");
		
		System.out.println(films);
		
		//Obtener un elemento: name.get(index);
		String film1= films.get(0);
		System.out.println("La primer peli es: "+film1);
		//Modificar un elemento name.set(index, newvalue)
		String film3= films.set(3,"Memento");
		String film3Get= films.get(3);
		System.out.println("La peli es: "+film3Get);
		//Conocer el tamaña del ArryList: name.size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del ArrayList es de "+sizeFilms+ " elementos");
		
		//Agregar y eliminar un elemento name.remove(index);
		films.add("The fountain");
		System.out.println(films);
		
		films.remove(6);
		System.out.println(films);
		
		System.out.println("****** Films in list*****");
		
		for (String film: films) {
			System.out.println(film);
		}
		
		matricula.add(2334);
		
		
		
		
		
		
	
	
	
	
	
	
	}

}
