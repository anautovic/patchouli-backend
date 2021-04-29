import React, {useState, useEffect} from 'react'
import '../css/formation.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Dropdown from '../components/Dropdown'
import Formation from '../images/formation_pat.jpg'
//import Image from 'react-bootstrap/Image'
//import Figure from 'react-bootstrap/Figure'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Images =styled.img`
width: 270px;
height: 300px;
@media only screen and (min-width:1024px){
  width: 500px;
  height: 400px;
}
`; 
const FormationScreen = () => {

    const [isOpen,  setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(! isOpen);
    };
    useEffect(() =>{
        Aos.init({duration:2500})
    }, [])
    return (
        <>
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero />
    <div className=' container-fluid mt-5 mb-lg-4 mb-md-3' >
        <div className= "row ">
            <div className= 'col-sm-12 col-md-6 col-xs-6'
            data-aos="zoom-in">
  <Images  src={Formation}  alt="171x180" />
            </div>

            <div className= 'col-sm-12 col-md-6 col-xs-12'
            data-aos="zoom-in-left">






            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      nous demandons votre email afin de vous communiquer
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="text" placeholder="Prenom" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Numéro de tel</Form.Label>
    <Form.Control type="password" placeholder="" />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Envoyer
  </Button>
</Form>



            </div>


        </div>

    </div>
 
</>
        
    )
}

export default FormationScreen