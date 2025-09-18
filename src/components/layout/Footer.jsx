// Write all the code here
import { FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <h2>Burger Shop</h2>
            <p>Las mejores hamburguesas, hechas con pasión y los mejores ingredientes.</p>
            <strong></strong>
            <aside>
                <h4>Síguenos</h4>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </aside>
        </footer>
    );
};

export default Footer;
