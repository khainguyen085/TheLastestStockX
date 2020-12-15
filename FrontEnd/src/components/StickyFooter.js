import React from 'react'
import { Link } from 'react-router-dom'
function StickyFooter({ products, productsFull }) {
  return (
    <div className='footer' style={{zIndex:"900"}}>
      <marquee behavior='left'>
        {productsFull.map((product) => (
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: 'none' }}
            key={product._id}
          >
            <span style={{ paddingLeft: '40px', color: 'white' }}>
              {product.name}
            </span>{' '}
            <span style={{ color: 'teal' }}>${product.price}</span>
          </Link>
        ))}
      </marquee>
    </div>
  )
}

export default StickyFooter
