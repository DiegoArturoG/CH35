import './Button.css'
/*Props, propiedades que se pueden asignar a los componentes para modificarel texto, la info desde la renderizaión del mismo. Se asignan como parametro de la funcion con el nombre de prop y debe ir entre llaves.
Se manda a llamar en el bloque de codigo donde se debe implementar  */
const Button =({label}) =>{
    return (
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button