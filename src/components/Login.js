import { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import styles from './Login.module.css'
const Login = () => {
    const formRef = useRef()
    const {user,login}=useAuth()
    const submitHandler=async (e)=>{
        e.preventDefault();
        await login(formRef.current[0].value,formRef.current[1].value);
        if(user)
            console.log("usersigned up")
        
        //login()
    }
    return (
        <div className="container" >
            <h2 className={styles.login}>Login Page</h2>
            <div>
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
