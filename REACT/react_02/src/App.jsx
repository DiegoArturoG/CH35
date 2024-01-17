

import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from './components/Button'
import Products from './components/Products'
function App() {
  const ImgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const ImgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
  const Camel ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";

  return (
    <>
      <Navbar/>
      <Main/>
      <Button label= 'Traer información'/>
      <Button label='Enviar información'/>
     <Products
     img={ImgFashion}
     name="Fresh"
     description="Tennis Fit Running Purple"
     price="$2999.99"

     />
     <Products
     img={ImgDark}
     name="Dark"
     description="Tennis Dark Runnig"
     price="$5999.10"
     />
    
     <Products
     img={Camel}
     name="Casual"
     description="Camel Casual Shoes"
     price="$10999.80"
     />
     <Products
     img={ImgDark}
     name="Casual Dark"
     description="Shoes for the days"
     price="$999.80"
     />

    </>
  )
}

export default App
