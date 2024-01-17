import './Products.css'

{/*const Products = (props) =>{  Props estructurados */}
    const Products = ({img,name,description,price}) =>{
    return (
        <>{/*  Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información
        <div className="cards">
            <div className="products--card">
                <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933'/>
                <h3>Fresh</h3>
                <p>Tennis Fit Running Purple</p>
                <h4>$2999.99</h4>
            </div>
        </div>
    */}
    {/*Props Estructurado: puedo asignar diferentes propiedades a un div sin tener que generar muchos propos solamente usando la palabr reservada props como parametro de la función
    Como quiero modificar varias propiedades puesdo mandar a llamar las promps en cada elemento como si fueran funciones */}
       {/* <div className="cards">
            <div className="products--card">
                <img src={props.img} alt='Snekers'/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div>
*/}{/*Props desestructurados permite asignar datos de un objeto a una viarela asignada para que dicha variable pueda obtener lo datos del objeto 
*No utilizamos props como parametro de la función sino que asignamos parametros a cada elementos y los llamamos directamente en dichos elementos 

 *Los props desestructadores viven como parámetros, pero entre llaves y se les asigna un nombre específico*/}

        <div className="cards">
            <div className="products--card">
                <img src={img} alt='Snekers'/>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
        </>
    )
}
export default Products