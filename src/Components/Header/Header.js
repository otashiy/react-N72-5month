
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {

    return (
        <header>
            <ul>
                <Link className="header__link" to="/contact">Contact</Link>
                <Link className="header__link" to="/services">Services</Link>
                <Link className="header__link" to="/about">About</Link>
            </ul>
        </header>
    )
}

export default Header;