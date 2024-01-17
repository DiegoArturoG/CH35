
import { useState } from 'react';
import './Astros.css'
import { useEffect } from 'react';
import Astro from './Astro';


//Mandar allamar la API utilizando HOOKs (useState y useEfect)


//Función, agregar la info de IPA Astros dentro de las cards
const Astros =()=>{
    const ASTROS_URL= 'http://api.open-notify.org/astros.json';

    //implementando useState
    const [astros, setAstros] = useState([]);
    //implentando useEffect
    useEffect (()=>{
        fetchAstros(); //Hoisting de una función que voy a definir 
    }, []);

    //crear función Fetch para conectarse a la API
    const fetchAstros =() =>{
        fetch(ASTROS_URL)
        .then(response => response.json())
        .then(data => setAstros(data.people)) //Para que la informacion viva dentro del compinente actualizado traigo SetSatros y le paso los datos de people de la API
        .catch(error=>console.error(error))
    }

    console.log(astros);//Muestra en consola del navegador 

    //Enviar info de API a cards con .map sobre el array 'astros'

    return(
        <>
        {//astro funciona como los elementos que se recorren en el Array astros y .map resibe los elementos, mas index y una fincion de tipo callback
            astros.map((astro, index) =>(
                //Crear una llave unica para cada elemento de Array (key) y despues desestructurar Array para que cada elemento resiba los props definidos dentro de Asto ({name,craf})
                <Astro key={astro} {...astro} />
            ))
        }
        </>
    )
}
export default Astros