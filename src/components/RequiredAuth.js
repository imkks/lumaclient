
import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';


const RequiredAuth = ({children}) => {
    const {user}=useAuth()
    // if(!user)
    //     return <Navigate to='/login'/>
    return children;
}

export default RequiredAuth
