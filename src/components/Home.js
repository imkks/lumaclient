import { Link,na } from "react-router-dom"

export const Home = () => {
    return (
        <div className="app-deck">
            <div>
            <Link to="/loans">Loans</Link>
            </div>
            <div>
                <Link to="/loan">Create Loans</Link>
            </div>
            <div>
            <Link to="/items">Items Purchased</Link>
            </div>
        </div>
    )
}
