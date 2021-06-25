import React, { useEffect } from 'react'
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
import Aos from 'aos'
import 'aos/dist/aos.css';
//mongodb+srv://anautovic:trs80@europe-afrique.it1m5.mongodb.net/proshop?retryWrites=true&w=majority
//mongodb://localhost:27017/strapi


const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    Aos.init({duration:2500})
    dispatch(listProducts( keyword, pageNumber));
  }, [dispatch, keyword, pageNumber])

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
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
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
