import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Imageaccueil from '../images/accueil_pat1.webp'
import Imageaccueils from '../images/accueil_pat.webp' 
import  Navbar from '../components/Navbar'
import Dropdown from '../components/Dropdown'
import Hero from '../components/Hero'
import Services from '../components/Services'
//import GlobalStyle from '../GlobalStyles'
import Reviews from '../components/Reviews'
//import { FaDivide } from 'react-icons/fa'
//import Loaders from '../components/Loaders'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Accueil = () => {
    const [isOpen,  setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(! isOpen);
    }
    
    const Accueilcontaint= styled.p`
font-size: 1.5rem;
padding: 1rem 2rem;
@media only screen and (max-width:400px) {
    font-size:1rem;
    padding: 0.6rem 1rem;
}

    `;
    const ImageA= styled.img`
    height:300px;
    width:250px;
    padding:6px;
    margin:6px;
    @media only screen and (max-width:424px) {
    height:120px;
    width:100px;
    padding: 2px;
    margin:2px;
    };
     @media only screen and (min-width:1024px) {
    height:200px;
    width:200px;
    padding: 2px;
    margin:2px;
    }
    `;
   
   //const [loading,  setLoading] = useState(false);
   useEffect(()=> {
    Aos.init({duration:1000})
       
   }, [])
    return (
        
        <>
        
        
                
                <Navbar toggle={toggle}  />
                <Dropdown isOpen={isOpen} toggle={toggle} />
                <Hero  />
                <div className="jumbotron">
                    <div className="row">
                    <div className= "col-md-6 col-lg-6 ">
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

export default Accueil
