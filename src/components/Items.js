import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";

const Items = () => {
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
        `http://localhost:8085/luma/view_purchases`,
        requestOptions,
        
      )
    return (
        <div>
            List of Items Purchased
            <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}

export default Items
