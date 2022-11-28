import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import {login} from '../redux/actions/perfil'



const initialState = {email:"", password:""}

const Login = ({token, login}) => {
  const  navigate = useNavigate()

  const [values, setValues] = useState(initialState)
  const handleChange = (e)=>{
    setValues((prev)=>{return {...prev, [e.target.name]: e.target.value}})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    login(values.email, values.password)
    navigate('/verAnuncios')
  }

  useEffect(() => {
    if(!token) return
    navigate('/')
  }, [token]);

  return (
    <div><main className="form-signin">
    <form onSubmit={handleSubmit}>
      <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div className="form-floating">
        <input name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange}/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
  
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </main>
  </div>
  )
}

const mapStateToProps =(state)=>{
  return {token: state.perfil.token}
}

export default connect(mapStateToProps, {login})(Login)