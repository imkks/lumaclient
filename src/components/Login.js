import styles from './Login.module.css'
const Login = () => {
    return (
        <div >
            <h2 className={styles.login}>Login Page</h2>
            <div>
            <form>
                <div>
                <label>Enter User Id</label>
                <input type="text"></input>
                </div>
                <div>
                <label>Enter User Password</label>
                <input type="password"></input>
                </div>
                
                <button type="submit">Login</button>
            </form>
            </div>
            
        </div>
        
    )
}

export default Login
