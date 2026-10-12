import { Link } from "react-router-dom";
import { NavigationMenu as Navbar } from "@/components/ui/NavigationMenu";

function Header() {
  return (
    <div>
      <Navbar>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/projects">Projects </Link>
      </Navbar>
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#000",
          margin: "20px 0",
        }}
      />
    </div>
  );
}

export default Header;
