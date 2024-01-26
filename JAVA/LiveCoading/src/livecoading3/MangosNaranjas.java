package livecoading3;

public class MangosNaranjas {
	
	private int mangos;
	private int naranjas;
	private int cajas;
	//Constructor
	public MangosNaranjas(int mangos, int naranjas, int cajas) {
		this.mangos = mangos;
		this.naranjas = naranjas;
		this.cajas = cajas;
	}
	//Getters and Setters

	public int getMangos() {
		return mangos;
	}

	public void setMangos(int mangos) {
		this.mangos = mangos;
	}

	public int getNaranjas() {
		return naranjas;
	}

	public void setNaranjas(int cajas) {
		this.cajas = cajas;
	}
	public void setCajas(int cajas) {
		this.cajas = cajas;
	}

	public int getCajas() {
		return naranjas;
	}
	
	public void contarMangos () {
		System.out.print("Mangos");
	}
	

}
