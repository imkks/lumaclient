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

      const myitems=items.map(item=><tr key={item.issueId}><td>{item.itemValuation}</td><td>{item.itemDescription}</td><td>{item.itemCategory}</td></tr>
    )
      // console.log(typeof(items))
    return (
        <div>
          <h3>employeeId:{user}</h3>
          <div className="table">
            <h2>List of Items Purchased</h2>
      <tr>
                <th>category</th>
                <th>description</th>
                <th>value</th>

            </tr>

      {myitems}
      </div>
        </div>
    )
}

export default Items
