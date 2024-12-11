import React, { useState } from 'react'

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container'>
       <div className='form-container'>
        {isLogin ? <>
        <div className='form'>
          <h2>Login form</h2>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <a href='#'>Forgot Password?</a>
          <button>Login</button>
          <p>Not a Member? <a href='#'onClick={()=> setIsLogin(false)}>SignUp</a></p>
        </div>
        </> : <>
        <div className='form'>
        <h2>SignUp Form</h2>
        <input type='email' placeholder='Email'></input>
        <input type='phonenumber' placeholder='PhoneNumber'></input>
        <input type='username' placeholder='UserName'></input>
        <input type='password' placeholder='Password'></input>
        <button>SignUp</button>
        <p>Already a Member? <a href='#' onClick={()=> setIsLogin(true)}>Login</a></p>
        </div>
        </>}
       </div>
     </div>
  )
}
