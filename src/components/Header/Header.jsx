import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {
  LocationOnOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons'

const Header = () => {
  return (
    <>
      <nav className='header'>
        {/** Header Logo */}
        <Link to='/'>
          <img
            className='header-logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='Logo'
          />
        </Link>
        {/** Header Items  */}
        <div className='header-option' style={{ marginRight: '-10px' }}>
          <LocationOnOutlined />
        </div>
        <div className='header-option'>
          <span className='header-option1'>Hello</span>
          <span className='header-option2'>Select Your Address</span>
        </div>
        <div className='search'>
          <select>
            <option>All</option>
          </select>
          <input type='text' className='searchInput' />
          <SearchOutlined className='searchIcon' />
        </div>
        {/** Header Sign In Item */}
        <div className='header-nav'>
          <Link to='/login' className='header-link'>
            <div className='header-option'>
              <span className='header-option1'>Hello Guest</span>
              <span className='header-option2'>Sign In</span>
            </div>
          </Link>
        </div>
        {/** Header return and order item */}
        <div className='header-nav'>
          <Link to='/orders' className='header-link'>
            <div className='header-option'>
              <span className='header-option1'>Return</span>
              <span className='header-option2'>&orders</span>
            </div>
          </Link>
        </div>
        {/** Header Checkout Item */}
        <div className='header-nav'>
          <Link to='/checkout' className='header-link'>
            <div className='header-basket'>
              <ShoppingCartOutlined />
              <span className='header-option2 basket-count'>0</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header
