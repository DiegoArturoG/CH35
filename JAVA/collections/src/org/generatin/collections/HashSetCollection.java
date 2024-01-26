package org.generatin.collections;
import java.util.HashSet;
import java.util.Arrays;
public class HashSetCollection {

	public static void main(String[] args) {
		//HasSet es uuna clase de Collections donde cada elemnto es unnico, no se repiten los elemntos. 
		HashSet<String> animals= new HashSet<String>();
		animals.add("Gato");
		animals.add("Perro");
		animals.add("Caballo");
		animals.add("Vaca");
		animals.add("Mapache");
		animals.add("Castor");
		animals.add("Pantera");
		animals.add("Pantera");
		
		//Imprimir el HashSet con cuenta los repetidos 
		System.out.println(animals);
		
		//Conocer su un elementos se encuentra dentro del Set: conteines();
		
		System.out.println(animals.contains("Pantera"));
		
		//Eliminar un elemnto 
		
		animals.remove("Vaca");
		System.out.println(animals);
		
		//Poniendo elementos en una sola linea 
		animals.addAll(Arrays.asList("Oso","Nahual","Buho"));
		System.out.println(animals);
		
		/**
		 * La clase HashSet no va a garantizar que los elementos se muestren según el orden establecido ya que busca eficientar la búsqueda y recuperación de los elementos.
		 * Utiliza tablas hash para almacenar los elementos y mostrarlos al usuario
		 */
		
		//Limpiar el Hashset: .clear();
		
		animals.clear();
		System.out.println(animals);
		
		
	}

}
