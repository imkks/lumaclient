const ApplyLoan = () => {
    return (
        <div>
            <h2>Apply for Loan</h2>
            <form>
                <div className="col">
                <div className="form-block">
                <label>Loan Amount</label>
                <input type="text"></input>
                </div>
                <div className="form-block">
                <label>Item Description</label>
                <input type="text"></input>
                </div>
                </div>
                <div className="col">
                <div className="form-block">
                <label>Item Value</label>
                <input type="number"></input>
                </div>
                </div>
                <button className="button" type="submit">Apply Loan</button>
            </form>
        </div>
    )
}

export default ApplyLoan
