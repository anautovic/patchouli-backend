import React,{useState} from 'react'
import '../css/Gallery.css'
//import {Link} from 'react-router-dom'
import NavbarS from '../components/NavbarS'
import Categories from '../components/Categories'
import items from '../data/GalleryData'
import {Row, Container} from 'react-bootstrap'
import Menu from '../components/Menu'


const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function GalleryScreen () {
	
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
  
    const filterItems = (category) => {
      if (category === 'all') {
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    };
  //-fx-image-gal
    return (
<>
      <NavbarS />
      <Container fluid='xl lg'>
          <Categories categories={categories} filterItems={filterItems} />
          <Row>
          <Menu items={menuItems} />
          </Row>
          </Container>
    
  
       
          {/*<div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
    <Menu items={menuItems} />*/}
      
      </>
    );
  }
  

export default GalleryScreen
