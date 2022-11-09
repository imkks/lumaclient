import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";

const Loans = () => {
    const {user}=useAuth()
    // console.log(user)
    const [items,setItems]=useState([])
    let raw = JSON.stringify({
        "employeeId": user
      });
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: 'POST',
        body: raw,
        headers:myHeaders,
        redirect: 'follow'
      };
      useEffect(()=>{
        fetch( `http://localhost:8085/luma/view_cards`,
        requestOptions).then(res=>res.json()).then(re=>setItems(re))
      },[])
    // let raw = JSON.stringify({
    //     "employeeId": user
    //   });
      
    //   let requestOptions = {
    //     method: 'POST',
    //     body: raw,
    //     redirect: 'follow'
    //   };
    //   const { loading, error, value } = useFetch(
    //     `http://localhost:8085/luma/view_purchases`,
    //     requestOptions,
        
      // )
      const myitems=items.map(item=><li key={item.loanId}>{item.loanType}</li>)
    return (
        <div>
           <h2>List of Loan Application</h2> 
      
           {myitems}
     
        </div>
    )
}

export default Loans
