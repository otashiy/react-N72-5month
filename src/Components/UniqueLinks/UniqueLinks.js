import { Link } from "react-router-dom";
import "./UniqueLinks.scss";

const UniqueLinks = () => {
    return (
        <ul>
                <Link className="header__link" to="/contact">Contact</Link>
                <Link className="header__link" to="/services">Services</Link>
                <Link className="header__link" to="/about">About</Link>
        </ul>
    )
}

export default UniqueLinks;