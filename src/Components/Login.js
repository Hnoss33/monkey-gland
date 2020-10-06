import { Button } from '@material-ui/core'
import React from 'react'
import './Styles/Login.css'
import { auth, provider } from './firebase'
import Gorilla from './Styles/gorilla.png'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../Reducer'



function Login() {
 const [state, dispatch] = useStateValue()

 const signIn = () => {
   auth.signInWithPopup(provider).then(result => {
    dispatch({
     type: actionTypes.SET_USER,
     user: result.user,
    })
   })
   .catch(error => {
    alert(error.message)
   })
 }

 return (
  <div className="login">
   <div className="login__container">
   <img 
     src={Gorilla}
     alt=""
   />
   <h1>Welcome to</h1>
   <p>Monkeygland</p>
   <Button onClick={signIn}>Sign in with Discord </Button>
   </div>
  </div>
 )
}

export default Login
