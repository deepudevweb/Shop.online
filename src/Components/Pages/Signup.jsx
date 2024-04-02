import React, { useEffect, useState } from 'react'
import './form.css';
import Validation from './Login/SignupVlaidation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const [error, setError] = useState({})
  const [showPassword, setShowPassword] = React.useState(false);
  useEffect(() => {
    setShowPassword(false)
  }, [])

  const handleInput = (event) => {
    setValue(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(value))
    if (error.name === "" && error.email === "" && error.password === "") {
      axios.post('http://localhost:8081/signup', value)
        .then((res) => {
          res.data === "success" ? navigate('/') : alert("email already exist")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div className='Joining'>
      <form className='sign-in-form' onSubmit={handleSubmit}>
        <h2 className='title'>Create account</h2>
        <label htmlFor='name'>Name</label>
        <input type="text" id="username" placeholder='Your Name' name='name' onChange={handleInput} />
        {error.name && <span className='text-danger'>{error.name}</span>}
        <label htmlFor='username'>Email</label>
        <input type="text" id="username" placeholder='Your email' name='email' onChange={handleInput} />
        {error.email && <span className='text-danger'>{error.email}</span>}
        <label htmlFor="password">Password</label>
        <input type={showPassword ? "text" : "password"} name="password" id='password' placeholder='password' onChange={handleInput} />
        {error.password && <span className='text-danger'>{error.password}</span>}
        {/* <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button> */}
        <div className='remember'><span><input className='check' type="checkbox" /> <b className='rem-chk'>Remember me</b></span> <span className='forgot'><a href="/">Forgot password?</a></span></div>
        <button type='submit'>Sign Up</button>
        {/* <span className='no-account'>Already have an account <a href="/">Sign In</a></span> */}
      </form>
    </div>
  )
}

export default Signup