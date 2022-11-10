import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";

const Loans = () => {
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
    fetch(`http://localhost:8085/luma/view_cards`,
      requestOptions).then(res => res.json()).then(re => setItems(re))
  }, [])
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
  const myitems = items.map(item => <tr key={item.loanId}><td>{item.loanId}</td><td>{item.loanType}</td><td>{item.durationInYears}</td><td>{item.card_issue_date}</td></tr>)
  return (
    <div>
      <div className="app-deck">
        <h3>Employee Id: {user.employeeId}</h3>
        <h3>Designation: {user.designation}</h3>
        <h3>Department: {user.department}</h3>
      </div>
      <div className="table">
        <h2>Loan Cards Availed</h2>
        <table>
          <tr>
            <th>Loan Id</th>
            <th>Loan Type</th>
            <th>Duration</th>
            <th>Card Issue Date</th>

          </tr>
          {myitems}
        </table>
      </div>
    </div>
  )
}

export default Loans
