import './navbar.css'
import { Link } from "react-router-dom";

const NavBar = () => (
    <header class='navbar'>
        <div class="navbar_title">SENDIT</div>
        <div class="navbar_item"><Link to="/" class="nav">Home</Link></div>
        <div class="navbar_item"><Link to="/services" class="nav">Services</Link></div>
        <div class="navbar_item"><Link to="/stores" class="nav">Stores</Link></div>
        <div class="navbar_item"><Link to="/track" class="nav">Track</Link></div>
        <div class="navbar_item"><Link to="/pricing" class="nav">Pricing</Link></div>
        <div class="navbar_item"><Link to="/register" class="nav">Register</Link></div>
        <div class="navbar_item"><Link to="/login" class="nav">Login</Link></div>
    </header>
);

export default NavBar;