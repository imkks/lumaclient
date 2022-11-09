import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";

const Items = () => {
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
        fetch( `http://localhost:8085/luma/view_purchases`,
        requestOptions).then(res=>res.json()).then(re=>setItems(re))
      },[])
      // const { loading, error, value } = (
      //   `http://localhost:8085/luma/view_cards`,
      //   requestOptions,
        
      // )
      // let items=JSON.stringify(value)
      console.log(items.length)

      const myitems=items.map(item=><li key={item.issueId}>{item.itemDescription}</li>)
      // console.log(typeof(items))
    return (
        <div>
            List of Items Purchased
      {/* <div>{JSON.stringify(value, null, 2)}</div> */}
      {myitems}
        </div>
    )
}

export default Items
