import useFetch from "../hooks/useFetch";

const Loans = () => {
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
           <h2>List of Loan Application</h2> 
           <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}

export default Loans
