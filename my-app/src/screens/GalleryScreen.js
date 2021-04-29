import React from 'react'
import '../css/Gallery.css'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const GalleryScreen = () => {
    return (
		<>
		<Navbar />
		<hr></hr> 
        <div className ='body'>
            
            <div className="-fx-image-gal">
	<div className="-fx-gal-item">
		<div className="-fx-gal-image-thumb" tabindex="1">
			<Link to="https://codepen.io/aledebarba" target="_blank">
				<img src="https://picsum.photos/id/237/300/300" alt='image1' />
			</Link>
		</div>
	</div>

	<div className="-fx-gal-item">
		<div className="-fx-gal-image-thumb" tabindex="1">
			<Link to="https://codepen.io/aledebarba" target="_blank">
				<img src="https://picsum.photos/id/238/300/300" alt='image2' />
			</Link>
		</div>
	</div>

	<div className="-fx-gal-item">
		<div className="-fx-gal-image-thumb" tabindex="1">
			<Link to="https://codepen.io/aledebarba" target="_blank">
				<img src="https://picsum.photos/id/39/300/300" alt='image3'/>
			</Link>
		</div>
	</div>

	<div className="-fx-gal-item">
		<div className="-fx-gal-image-thumb" tabindex="1">
			<Link to="https://codepen.io/aledebarba" target="_blank">
				<img src="https://picsum.photos/id/240/300/300" alt='image4'/>
			</Link>
		</div>
	</div>

	<div className="-fx-gal-item">
		<div className="-fx-gal-image-thumb" tabindex="1">
			<Link to="https://codepen.io/aledebarba" target="_blank">
				<img src="https://picsum.photos/id/341/300/300"  alt='image5'/>
			</Link>
		</div>
	</div>

	<div className="-fx-gal-item">
		<div className="-fx-gal-image-thumb" tabindex="1">
			<Link to="https://codepen.io/aledebarba" target="_blank">
				<img src="https://picsum.photos/id/142/300/300" alt='image6' />
			</Link>
		</div>
	</div>
</div>

        </div>
		</>
    )
}

export default GalleryScreen
