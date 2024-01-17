import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <>
        <div>
            <h1>Esta es la pág de inicio</h1>
            <Link to="about-us">
            Presione aquí para ir a la pág Sobre Nosotros
            </Link>
            <br></br>
            <Link to="contact">
            Presione aquí para ir a la pág Contacto
            </Link>
        </div>
        </>
    )
}

export default Inicio