import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import {Services} from "../data/ServicesData"
import '../css/service.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import NavbarS from '../components/NavbarS'








const ServicePatchouli = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  

  const fetchJobs =  () => {
    const newJobs = Services
    
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs();
    Aos.init({duration:1000})
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const {  price,  description, titles, image  } = jobs[value]
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
          <h3>{titles}</h3>
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
        
 <hr />
       <article className="job-info" data-aos="fade-right">
          <h4>Tarifs : </h4>
          {price.map((price, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{price}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btns" ><a href="tel:+237 699504975" style= {{
        textDecoration:"none"
        }}>Appelez nous</a>
        
      </button>
    </section>
    </>
  )
}
export default ServicePatchouli