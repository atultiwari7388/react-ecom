import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import AmazonLogo from '../../Amazon_Logo.png'

const Login = () => {
  const [email, setEmail] = useState('')

  const [pass, setPass] = useState('')

  const signIn = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='login'>
        <Link to='/'>
          <img src={AmazonLogo} alt='Logo' className='login-logo' />
        </Link>
        <div className='login-container'>
          <h1>SignIn</h1>
          <form>
            <h5>E-mail</h5>
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
            <button type='Submit' onCLick={signIn} className='login-signIn'>
              SignIn
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        <p>New To Amazon ?</p>
        <Link to='/register'>
          <button className='login-register'>Create Account</button>
        </Link>
      </div>
    </>
  )
}

export default Login
