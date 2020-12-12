import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg } from 'react-bootstrap'
import Rating from './Rating.js'

const Product = ({ product }) => {
  // console.log(product)
  return (
    <Card className='my-3 p-3 rounded' style={{height:"88%"}}>
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} variant='top'></CardImg>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
