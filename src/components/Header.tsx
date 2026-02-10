import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">Livraison offerte dès 200€ d'achat</div>
      <nav className="navbar container">
        <ul className="nav-links">
          <li><Link to="/mode">Nouveautés</Link></li>
          <li><Link to="/mode">Mode</Link></li>
          <li><Link to="/accessoires">Accessoires</Link></li>
        </ul>
        
        <div className="logo">
          <Link to="/"><h1>Marlida</h1></Link>
        </div>

        <div className="nav-icons">
          <span>Recherche</span>
          <span>Compte</span>
          <span>Panier (0)</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;