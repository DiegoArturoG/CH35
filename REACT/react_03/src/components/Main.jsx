import './Main.css'
import GenMXlogo from '../assets/Generation.jpg'

const Main = () => {
   return( 
   <>
   <div className='main--container'>
    <div className='main--head'>
        <a href='https://mexico.generation.org/' target='blank'>
            <img src={GenMXlogo} className='main--logo'alt='Logo Gen Mex' />
        </a>
    </div>
    <h1>React  + Vite</h1>
    <h2>Astros API</h2>
   </div>
    </>
   )
}
export default Main