import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'

const Login= ()=>{
    const history= useHistory()
    //useHistory allows us to programatically change the url.
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const signIn=e=>{
        e.preventDefault();
        //some fanct firebase signin...
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch((error=> alert(error.massage)))
    }
    const register=e=>{
        e.preventDefault()
       //some fancy firebase register...
       auth.createUserWithEmailAndPassword(email,password)
       .then((auth)=>{
           console.log(auth)
           if(auth){
               history.push('/')
           }
       })
    .catch(error=>alert(error.massage))
    }
    return(
 

        <div className='login'>
        <Link to='/'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeiD2G11tH3ADxCDZYbkCdjzE7kuQKZceTAA&usqp=CAU" alt="" /></Link>
           
            <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/> 
                {/* password as ****** */}
                <button  type='submit' className='sign-in__btn' onClick={signIn}>Sign-in</button>
                
            </form>
            <p>By continuing, you agree to Amazon's 
                Conditions of Use and Privacy Notice.</p>
                 <button onClick={register} className='register__btn'>Create Amazon Account</button>
            </div>
        </div>
    )
}
export default Login