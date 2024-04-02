import React, { useState } from 'react'
import '../form.css';
import Signin from '../Signin'
import Signup from '../Signup'

function login() {
  const [page, setPage] = useState("Signin")
  return (
    <div className='login-page'>
      <div className='login-switch '>
        <div className={page == "Signin" ? "Borderbottom" : ""} onClick={() => setPage("Signin")}><b className='switch'>SignIn</b></div>
        <div className={page == "Signup" ? "Borderbottom" : ""} onClick={() => setPage("Signup")}><b className='switch'>SignUp</b></div>
      </div>
      {page === "Signup" ? <Signup /> : <Signin />}
    </div>
  )
}

export default login