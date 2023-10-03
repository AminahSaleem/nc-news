import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <Link to="/users">
            <button>User List</button>
            </Link>
            <Link to="/">
            <button>Home</button>
            </Link>

        </nav>
    )
}

export default Navigation