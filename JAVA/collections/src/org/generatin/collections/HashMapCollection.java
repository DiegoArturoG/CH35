package org.generatin.collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapCollection {

	public static void main(String[] args) {
		/*
		 * HasMap almacena elementos en pares clave/valor y se puede acceder a ellos mediante index 
		 * No es ordenado y permite datos duplicados 
		 * */
		
		HashMap<String,String> capitals = new HashMap<String,String>();
		
		//Agregando elementos "clave/valor"
		capitals.put("Villahermosa","Tabasco");
		capitals.put("Monterrey","Nuevo León");
		capitals.put("Guadalajara","Jalisco");
		capitals.put("Puebla","Puebla");
		capitals.put("Toluca","Estado de México");
		capitals.put("Chetumal","Quintana Roo");
		System.out.println(capitals);
		
		//Map.Entry<> es un método de la interfaz Map que representa una entrada en un Map. Toma como argumento los tipos de datos asignados al HashMap. El usuario asigna el nombre de la interfaz y recibe un método .entrySet() que devuelve el conjunto (Set) de las entrada (clave-valor) en el HashMap.
				//De esta manera ya podemos utilizar los métodos de abajo
		
		for(Map.Entry<String, String> entry : capitals.entrySet()){
			System.out.println(entry.getKey() +" es la capital de "+entry.getValue());
			
		}
		
		//Mostrar la clave (.getKey) y el valor(.getvalue()) de manera individual para su manipulación
		
		/********* Ejemplo 02 **********/
		Map<String,Integer> calificaciones = new HashMap<>();
		calificaciones.put("Rene",9);
		calificaciones.put("Xime", 10);
		calificaciones.put("Diego",8);
		calificaciones.put("Rodrigo", 5);
		
		for(Map.Entry<String, Integer> calificacion : calificaciones.entrySet()){
			System.out.println(calificacion.getKey() +" tiene una calificación de  "+calificacion.getValue());
			
		}
		
		

	}

}
