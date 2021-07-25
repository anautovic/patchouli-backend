import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import {ServicesCoif } from "../data/ServicesData"
import {Container, Row} from 'react-bootstrap' 
import '../css/service.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import NavbarS from '../components/NavbarS'








const ServicePatchouliCoif = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  

  const fetchJobs =  () => {
    const newJobs = ServicesCoif
    
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs();
    Aos.init({duration:700})
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const {   description, titles, image  } = jobs[value]
  return (
<>
<NavbarS />

  <img src="https://res.cloudinary.com/wil/image/upload/v1624494006/WhatsApp_Image_2021-06-24_at_01.17.09_queodf.jpg"
     className="img-fluid"
    alt="bar Makeup"/>
    
    <section className="section">
      <div className="title">
        <h2>Services</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.category}
                
              </button>
              
            )
          })}
        </div>
        {/* job info */}
        <div className="row">
        <div className= "col" dat-aos= "fade-left">
        <article className="job-info" data-aos= "fade-left">
          <h3>Tarifs {titles}</h3>
          {description.map((description, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>

                <p>{description}</p>
              </div>
            )
          })}
        </article>
        </div>
        <div className="col-4 col-lg-6">
          <img src={image} alt="test" className="image-ctn" />
        </div>
        </div>
        

      </div>
      <button type="button" className="btns" ><a href="tel:+237 690915116" style= {{
        textDecoration:"none"
        }}>Appelez nous</a>
        
      </button>
      <Container fluid= 'xl lg' >
        <Row>
        <div className="col-md-4">
          <div data-aos="zoom-in" className="card mb-4  mt-3 shadow-sm">
         
  

<video className="card video-fluid z-depth-1" style={{width: "18rem",
   height: '400px'}}  loop controls >
  <source src="https://res.cloudinary.com/wil/video/upload/v1624794440/VID-20210615-WA0088_xoobg4.mp4" type="video/mp4"
  className="card-img-top" 
   style={{width: "18rem", height: '400px'}} />
</video>

 
 </div>
 </div>
<div className="col-md-4">
          <div data-aos="zoom-in" className="card mb-4  mt-3 shadow-sm">
         
  

<video className="card video-fluid z-depth-1" style={{width: "18rem",
   height: '400px'}}  loop controls   >
  <source src="https://res.cloudinary.com/wil/video/upload/v1626772234/VID-20210713-WA0018_vcithe.mp4" type="video/mp4"
  className="card-img-top" 
   style={{width: "18rem", height: '400px'}} />
</video>

 
 </div>
 </div>
 <div className="col-md-4">
          <div data-aos="zoom-in" className="card mb-4  mt-3 shadow-sm">
         
  

<video className="card video-fluid z-depth-1" style={{width: "18rem",
   height: '400px'}}  loop controls >
  <source src="https://res.cloudinary.com/wil/video/upload/v1624797439/VID-20210615-WA0087_btxjyy.mp4"
   type="video/mp4"
  className="card-img-top" 
   style={{width: "18rem", height: '400px'}} />
</video>

 
 </div>
 </div>

        </Row>
      </Container>
    </section>
    </>
  )
}
export default ServicePatchouliCoif