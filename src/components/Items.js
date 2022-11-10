import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";

const Items = () => {
  const { user } = useAuth()
  // console.log(user)
  const [items, setItems] = useState([])
  let raw = JSON.stringify({
    "employeeId": user.employeeId
  });
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'POST',
    body: raw,
    headers: myHeaders,
    redirect: 'follow'
  };
  useEffect(() => {
    fetch(`http://localhost:8085/luma/view_purchases`,
      requestOptions).then(res => res.json()).then(re => setItems(re))
  }, [])
  // const { loading, error, value } = (
  //   `http://localhost:8085/luma/view_cards`,
  //   requestOptions,

  // )
  // let items=JSON.stringify(value)
  console.log(items.length)

  const myitems = items.map(item => <tr key={item.issueId}><td>{item.issueId}</td><td>{item.itemDescription}</td><td>{item.itemMake}</td><td>{item.itemCategory}</td><td>{item.itemValuation}</td></tr>
  )
  // console.log(typeof(items))
  return (
    <div>
      <div className="app-deck">
        <h3>Employee Id: {user.employeeId}</h3>
        <h3>Designation: {user.designation}</h3>
        <h3>Department: {user.department}</h3>
      </div>
      <div className="table">
        <h2>Items Purchased</h2>
        <table>
          <tr>
            <th>Issue Id</th>
            <th>Item Description</th>
            <th>Item Make</th>
            <th>Item Category</th>
            <th>Item Valuation</th>

          </tr>

          {myitems}
        </table>
      </div>
    </div>
  )
}

export default Items
