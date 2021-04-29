import React,{useState, useEffect} from 'react'
import '../css/Gallery.css'
//import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dropdown from '../components/Dropdown'
import Image1 from '../images/formation_pat.jpg'
import Image2 from '../images/hero2.jpg'
import Image4 from '../images/sophie-nengel-zmUlOIT5FuI-unsplash.jpg'
import Image3 from '../images/huile riclin.jpg'
import Image5 from '../images/formacc.jpg'
import Image6 from '../images/academy_pat.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css';
const GalleryScreen = () => {
	const [isOpen,  setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(! isOpen);
    }
	useEffect(()=>{
        Aos.init({duration: 3000});
      }, []);
    return (
		<>
		<Navbar toggle={toggle} />
		<Dropdown isOpen={isOpen} toggle={toggle} />
		<hr></hr> 
        <div className ='body'>
            
            <div className="-fx-image-gal">
	<div className="-fx-gal-item"
	data-aos="fade-up">
		<div className="-fx-gal-image-thumb" tabindex="1">
			
				<img src={Image1} alt='image1' />
			
		</div>
	</div>

	<div className="-fx-gal-item"
	data-aos="zoom-in-up">
		<div className="-fx-gal-image-thumb" tabindex="1">
			
				<img src={Image2} alt='image2' />
			
		</div>
	</div>

	<div className="-fx-gal-item"
	data-aos="zoom-in-down">
		<div className="-fx-gal-image-thumb" tabindex="1">
			
				<img src={Image3} alt='image3'/>
			
		</div>
	</div>

	<div className="-fx-gal-item"
	data-aos="fade-up">
		<div className="-fx-gal-image-thumb" tabindex="1">
			
				<img src={Image4} alt='image4'/>
			
		</div>
	</div>

	<div className="-fx-gal-item" data-aos="fade-up">
		<div className="-fx-gal-image-thumb" tabindex="1">
			
				<img src={Image5}  alt='image5'/>
			
		</div>
	</div>

	<div className="-fx-gal-item" data-aos="zoom-in-up">
		<div className="-fx-gal-image-thumb" tabindex="1">
			
				<img src={Image6} alt='image6' />
			
		</div>
	</div>
</div>

        </div>
		</>
    )
}

export default GalleryScreen
