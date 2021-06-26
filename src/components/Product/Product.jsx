/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@material-ui/icons'

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {
  return (
    <>
      <div className='product'>
        <div className='info'>
          <Link to={`/products/${id}`} className='title'>
            <p>{title}</p>
          </Link>
          <p className='price'>
            <strong>MRP.</strong>
            <strong>{price}</strong>
          </p>
          <div className='rating'>
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}>✴️</p>
              ))}
          </div>
        </div>
        <img src={image} alt='image' />
        <button>
          <i>
            <ShoppingCartOutlined />
          </i>
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default Product
