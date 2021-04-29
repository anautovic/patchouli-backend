import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Imageaccueil from '../images/accueil_pat1.jpg'
import Imageaccueils from '../images/accueil_pat.jpg' 
import  Navbar from '../components/Navbar'
import Dropdown from '../components/Dropdown'
import Hero from '../components/Hero'
import Services from '../components/Services'
//import GlobalStyle from '../GlobalStyles'
import Reviews from '../components/Reviews'
//import { FaDivide } from 'react-icons/fa'
import Loaders from '../components/Loaders'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Accueil = () => {
    const [isOpen,  setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(! isOpen);
    }
    
    const Accueilcontaint= styled.p`
font-size: 1.8rem;
padding: 1rem 2rem;
@media only screen and (max-width:400px) {
    font-size:1rem;
    padding: 0.6rem 1rem;
}

    `;
    const ImageA= styled.img`
    max-height:400px;
    max-width:250px;
    padding:6px;
    margin:6px;
    @media only screen and (max-width:400px) {
    max-height:160px;
    max-width:150px;
    padding: 2px;
    margin:2px;
    }
    `;
   
   const [loading,  setLoading] = useState(false);
   useEffect(()=> {
    Aos.init({duration:2500})
       setLoading(true)
       setTimeout(() =>{
           setLoading(false)
       }, 1500)
   }, [])
    return (
        
        <>
        {
            loading ?  (<Loaders />)
            :
                (<>
                <Navbar toggle={toggle}  />
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <Hero  />
                <div className="jumbotron">
                    <div className="row">
                    <div className= "col-md-6 col-lg-6 "
                     data-aos="zoom-in">
                        <Accueilcontaint >Venez découvrir l'institut de beauté Patchouli pour prendre soin de vous mais aussi pour faire votre
                            shopping près de chez vous à prix discount
                        </Accueilcontaint>
                    </div>
                    <div className="col-md-6 col-lg-6"
                     data-aos="fade-up">
            <ImageA  src={Imageaccueils} alt="acceuil" />
            <ImageA  src={Imageaccueil} alt="acceuil" />
                    </div>
                    </div>
                </div>
                <Services />
                <Reviews />
                </>
                )
            
        }
           
   
    
        </>
    )
}

export default Accueil
