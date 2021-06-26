import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import AmazonLogo from '../../Amazon_Logo.png'

const Register = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const register = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='register'>
        <Link to='/'>
          <img src={AmazonLogo} alt='Logo' className='register-logo' />
        </Link>
        <div className='register-container'>
          <h1>Create Account</h1>
          <form>
            <h5>Email</h5>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type='password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button type='submit' onClick={register} className='continue'>
              Continue
            </button>
            <div className='detail'>
              <p>Already have an Account ?</p>
              <Link to='/login' className='signin-link'>
                <p>SignIn</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
