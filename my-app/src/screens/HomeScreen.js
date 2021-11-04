import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Categories from './Categories'
import Aos from 'aos'
import 'aos/dist/aos.css';
//mongodb+srv://anautovic:trs80@europe-afrique.it1m5.mongodb.net/proshop?retryWrites=true&w=majority
//mongodb://localhost:27017/strapi


const fetchProd = async ()=>{
  const response = await fetch(`/api/products/`)
  const items = await response.json()
  console.log(items);
  
}

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, page, pages } = productList;
  const items = productList.products;
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
 
  
  const [menuItems, setMenuItems] = useState(items);
 //const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
 
  useEffect(() => {
    Aos.init({duration:2500})
   ;
   fetchProd();
  }, [])
  
  

  
  return (
    <>
    <Header />
<Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/maboutique' className='btn btn-light'>
          Go Back
        </Link>
      )}

      <h1>Produits récents de Patchouli</h1>

    
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>

        <Row>
        
              <Categories categories={allCategories} filterItems={filterItems} />
             
        </Row>
          <Row>
          
            
              
              <Col  sm={9} md={6} lg={4} xl={3}>
                <Product items={menuItems} col={2} />
              </Col>
           
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
