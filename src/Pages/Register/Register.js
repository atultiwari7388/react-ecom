import React, { useState, useEffect } from 'react'
import './Register.css'
import { Link, useHistory } from 'react-router-dom'
import AmazonLogo from '../../Amazon_Logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { registerInitiate } from '../../Redux/actions'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user } = useSelector((state) => state.data)

  const history = useHistory()
  // console.log(user)
  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user, history])

  let dispatch = useDispatch()

  const register = (e) => {
    e.preventDefault()
    dispatch(registerInitiate(email, password))
    setEmail('')
    setPassword('')
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
