import React, { useEffect} from 'react'
//import '../css/formation.css'
import NavbarS from '../components/NavbarS'
import { Helmet } from "react-helmet";
import { Row, Col, Card, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../css/formation.css'



 



 


const FormationScreen = () => {

    
    useEffect(() =>{
        Aos.init({duration:2500})
    }, [])
    return (
        <>
        <Helmet>
        <title>Centre de Formation Institut patchouli -Esthetique-Cosmétique-Bonamoussadi </title>
        <meta property="og:image" content="https://res.cloudinary.com/wil/image/upload/v1624495958/formationInst_uzgfxm.jpg" />
    <link rel="apple-touch-icon" href="../src/images/logo_pat.webp" />
    <meta property="robots" content="index, follow" />
   
        <meta property="og:type" content="Website" />
        <meta name='keyword' content="Formation, institut de beauté, Pédicure Manicure, Hammam, Make up , patchouli, rasta passe-meches, antenne Kotto" />
        <meta name="description" content="Tu souhaites devenir une professionnelle de la beauté et tu ne sais pas où te former ? 
        L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
        dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.
        En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat." />
      </Helmet>
      <NavbarS />

<Container fluid="lg xl ">  
<Row className="mt-5">
<Col md={6}>
<Card className="card_ct" >
  <Card.Img variant="top" 
  src="https://res.cloudinary.com/wil/image/upload/v1624501215/WhatsApp_Image_2021-06-24_at_03.17.24_kdqdzl.jpg" 
  alt= "promotrice"/>
  </Card>
</Col>


<Col md={6}>
       
    <h3 className="mb-2">PATCHOULI BEAUTY ACADEMY </h3>
    <p className=" mb-auto">
    L’Institut de beauté patchouli est un centre de formation professionnel offrant des formations 
    dans: onglerie, make-up, coiffure mixte, cosmétiques, esthétiques.<br></br>
    En plus de la formation nous offrons des stages et des attestations délivrées par l'Etat.
    </p>
    <button type="button" className="btns" ><a href="tel:+237 690915116" style= {{
        textDecoration:"none"
        }}>Appelez nous</a>
        
      </button>

      
</Col>
</Row>
      </Container>





      <div className="album py-5 bg-light">
    <Container fluid='xl lg'>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg" className="card-img-top" alt="Onglerie_flyer" />
 </div>

            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href=" https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg" download >télécharger</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/esthetique_v2kual.jpg"
   className="card-img-top" alt="coiffure_complete_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link type="button" className="btn btn-sm btn-outline-secondary"
                  to="https://res.cloudinary.com/wil/image/upload/v1624547771/esthetique_v2kual.jpg" download>view</Link>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/make-up_nbjri1.jpg" className="card-img-top" alt="make-up_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href="https://res.cloudinary.com/wil/image/upload/v1624547771/make-up_nbjri1.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547782/Coiffure_fyi0wh.jpg"
   className="card-img-top" alt="coiffure_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href= "https://res.cloudinary.com/wil/image/upload/v1624547782/Coiffure_fyi0wh.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/coiffure_complete_lsvfu9.jpg" 
  className="card-img-top" alt="formation_complete_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  href= "https://res.cloudinary.com/wil/image/upload/v1624547771/coiffure_complete_lsvfu9.jpg" download>View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <div className="card" style={{width: "18rem"}}>
  <img src="https://res.cloudinary.com/wil/image/upload/v1624547771/onglerieform_ortitn.jpg"
   className="card-img-top" alt="Onglerie_flyer" />
 </div>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        </Container>
        </div>



</>
        
    )
}

 export default FormationScreen
