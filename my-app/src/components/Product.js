import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({items}) => {
    
    return (
        <div>
            { items.map((menuItem, index) => {
        const {_id,image,name, numReviews, price, rating  } = menuItem;
         return (
            
            <Card className = "my-3 p-3" key={index}>
               <Link to={`/product/${_id}`}>
<Card.Img src= {image} variant= "top" />
               </Link>
               <Card.Body>
               <Link to={`/product/${_id}`}>
<Card.Title as='div'> 
    <strong>{name}</strong>
</Card.Title>
               </Link> 
               <Card.Text as ='div'>
<Rating value={rating} text= {`${numReviews} review`} />
               </Card.Text>
               <Card.Text as='h3'> fcfa{price} </Card.Text>
               </Card.Body>
               </Card> 
         );

            })}
           
        </div>
        
    )
}

export default Product
