import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";

const Loans = () => {
    const {user}=useAuth()
    let raw = JSON.stringify({
        "employeeId": user?.employeeId
      });
      
      let requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
      };
      const { loading, error, value } = useFetch(
        `http://localhost:8085/luma/view_items`,
        requestOptions,
        
      )
    return (
        <div>
           <h2>List of Loan Application</h2> 
           <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}

export default Loans
