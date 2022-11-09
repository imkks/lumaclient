import useFetch from "../hooks/useFetch";

const Items = () => {
    let raw = JSON.stringify({
        "employeeId": "k04"
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
