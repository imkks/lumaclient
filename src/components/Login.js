import { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import styles from './Login.module.css'
const Login = () => {
    const formRef = useRef()
    const [error, seterror] = useState(false)
    const navigate=useNavigate();
    const {user,login,setUser}=useAuth()
    const submitHandler=async (e)=>{
        e.preventDefault();
       let empoyeeId=await login(formRef.current[0].value,formRef.current[1].value);
       setUser(empoyeeId)
        // console.log(user)
        if(empoyeeId)
        {
            // console.log("hei")
            navigate('/')
            
        }
        else
        {
            seterror(true);
        }
        // const errorMsg=(<h3>Invalid Credentials</h3>)
        // login()
    }
    return (
        <div className="container" >
            <h2 className={styles.login}>Login Page</h2>
            <div>
                {error && <h3>Invalid Credentials</h3>}

            <form ref={formRef} onSubmit={submitHandler}>
                <div className="form-block">
                <label>Enter User Id</label>
                <input type="text"></input>
                </div>
                <div className="form-block">
                <label>Enter User Password</label>
                <input type="password"></input>
                </div>
                
                <button className="button" type="submit">Login</button>
            </form>
            </div>
            
        </div>
        
    )
}

export default Login
