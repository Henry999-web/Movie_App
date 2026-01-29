import "../css/Navbar.css"
import { Link } from "react-router-dom"
import clapperboard from '../assets/clapperboard.png';

function NavBar() {
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"><img src={clapperboard} alt={clapperboard} /></Link>
            </div>
            <input type="checkbox" id="menu-toggle" />
           <label htmlFor="menu-toggle" className="hamburger"><p>Navigation</p>&#9776;</label>
               <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
               </div>
        </nav>
    )
}

export default NavBar