import './Navbar.css' //Importación de CSS

//Crear función que contiene el marcado para que vivan nuestro codigo. 

const Navbar = () => {
return (
    <> {/*Fragmento, comentario multilinea encerrado entre llaves */}
    <div className='navbar--container'>
     <div className='navbar--title'> 
     <h1>GenMex35</h1>
     </div>
     <div className='navbar--links'>
        <div className='navbar--Link'>
            <a href='#'>Home</a>

        </div>
        <div className='navbar--Link'>
            <a href='#'>About</a>

        </div>
        <div className='navbar--Link'>
            <a href='#'>Astro </a>

        </div>

     </div>
    </div>
    </>
)
}

export default Navbar;