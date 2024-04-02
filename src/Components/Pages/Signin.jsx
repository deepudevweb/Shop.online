import React, {  useEffect, useRef, useState } from 'react'
import './form.css';
import Validation from './Login/LoginValidation'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signgin() {
  const username = useRef()
  const password = useRef()
  const [value, setValue] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate();
  const [error, setError] = useState({})
const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    setShowPassword(false)
  },[])
 

  const handleInput = (event) => {
    setValue(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    // setError(Validation(value))
    axios.post("https://picoback.vercel.app/authenticate", value)
    .then ((res) => {
      if (res.data.status === "success") {
       navigate('/Home')
      } else {
       alert("no record found")
      }
    })
     .catch ((err) => {
       console.log(err)
     })

     if(username.current.value && password.current.value) {
       localStorage.setItem("username", username.current.value)
       localStorage.setItem("password", password.current.value)
     }
     if(username.unique_id && password.unique_id) {
       localStorage.setItem("unique_id", username.unique_id)
     }
      
    }
  


  return (
    <div className='Joining'>
      <form className='sign-in-form' onSubmit={handleSubmit} > 
      <h2 className='title'>Sign In</h2>
        <label htmlFor='username'>username</label>
        <input ref={username} type="username" id="username" placeholder='Your username' onChange={handleInput} name='username' />
        {error.username && <span className='text-danger'>{error.username}</span>}
        <label htmlFor="password">Password</label>
        <input ref={password} type={showPassword ? "text" : "password"} name="password" id='password'  onChange={handleInput} placeholder='password'/>
        {error.password && <span className='text-danger'>{error.password}</span>}
        {/* <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button> */}
        <div className='remember'><span><input className='check' type="checkbox" /> <b className='rem-chk'>Remember me</b></span> <span className='forgot'><a href="/">Forgot password?</a></span></div>
        <button type='submit'>Sign In</button>
       {/* <span className='no-account'>Don't have an account? <a href="/signup">Sign In</a></span> */}
      </form>
    </div>
  )
}

export default Signgin