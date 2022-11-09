import { useRef } from "react"
import { useNavigate } from "react-router-dom";

const ApplyLoan = () => {
    const formEl=useRef(null);
    const naviate=useNavigate()
    const submitHandler=async e=>{
        e.preventDefault();
       let result= await applyLoan(formEl.current[0].value,formEl.current[1].value,formEl.current[2].value,formEl.current[3].value)
       if(result)
            naviate("/")

    }
    const applyLoan=async (userId,desc,make,cat,value)=>{
        let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "employeeId": userId,
  "itemDescription": desc,
  "issueStatus": "N",
  "itemMake": make,
  "itemCategory": cat,
  "itemValuation": value
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let response=await fetch("localhost:8085/luma/loan_apply", requestOptions)
let result=response.json();
return result;
    }

    return (
        <div>
            <h2>Apply for Loan</h2>
            <form ref={formEl} onSubmit={submitHandler}>
                <div className="col">
                <div className="form-block">
                <label>Employee Id</label>
                <input type="text"></input>
                </div>
                <div className="form-block">
                <label>Item Description</label>
                <input type="text"></input>
                </div>
                <div className="form-block">
                <label>Item Category</label>
                <input type="text"></input>
                </div>
                </div>
                <div className="col">
                <div className="form-block">
                <label>Item Value</label>
                <input type="number"></input>
                </div>
                <div className="form-block">
                <label>Item Make</label>
                <input type="text"></input>
                </div>
                </div>
                <button className="button" type="submit">Apply Loan</button>
            </form>
        </div>
    )
}

export default ApplyLoan
