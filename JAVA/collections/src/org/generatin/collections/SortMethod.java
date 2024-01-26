package org.generatin.collections;
import java.util.ArrayList;
import java.util.Collections;
public class SortMethod {

	public static void main(String[] args) {
	//El método .sort Permite ordenar los elementos de un ArrayList 
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
		
		points.add(5);
		points.add(15);
		points.add(2);
		points.add(5);
		points.add(4);
		points.add(6);
		points.add(9);
		points.add(19);
		
	System.out.println(points);
	
	Collections.sort(points);
	System.out.println(points);//Ordenamiento de menor a mayor
	
	names.add("Dante");
	names.add("Rey");
	names.add("Aldo");
	names.add("gonzalo");
	names.add("arturo");
	System.out.println(names);
	
	Collections.sort(names);
	System.out.println(names);//Toma en cuenta el oredenamiento ASC11
	}

}
