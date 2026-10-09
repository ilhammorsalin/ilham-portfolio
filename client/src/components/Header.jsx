import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <nav>
                <Link to="/">Home  </Link>
                <Link to="/about">About  </Link>
                <Link to="/contact">Contact  </Link>
                <Link to="/projects">Projects  </Link>
            </nav>
            <hr style={{ border: "none", height: "2px", backgroundColor: "#000", margin: "20px 0" }} />
        </div>
      )
}

export default Header;
