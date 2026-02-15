import { Link } from 'react-router-dom';
import './Header.css';

// 1. Menu de GAUCHE (Sans "La Marque")
const LEFT_MENU_ITEMS = [
  {
    label: "Nouveauté",
    path: "/mode",
    submenu: [
      { label: "Nouvelle Collection", path: "/mode" },
      { label: "Marlida x Collab", path: "/mode" }
    ]
  },
  {
    label: "Mode",
    path: "/mode",
    submenu: [
      { label: "Tout voir", path: "/mode" },
      { label: "Nouveautés", path: "/mode" },
      { label: "Robes", path: "/mode/robes" },        // <-- Changé !
      { label: "Jupes", path: "/mode/jupes" },        // <-- Changé !
      { label: "Mailles", path: "/mode/mailles" },    // <-- Changé !
      { label: "Tops", path: "/mode/tops" },          // <-- Changé !
      { label: "Pantalons", path: "/mode/pantalons" } // <-- Changé !
    ]
  },
  {
    label: "Accessoires",
    path: "/accessoires",
    submenu: [
      { label: "Tout voir", path: "/accessoires" },
      { label: "Accessoires Cheveux", path: "/accessoires/cheveux" }, // <-- Changé !
      { label: "Lifestyle", path: "/accessoires/lifestyle" },         // <-- Changé !
      { label: "Sacs", path: "/accessoires/sacs" },                   // <-- Changé !
      { label: "Bijoux", path: "/accessoires/bijoux" }                // <-- Changé !
    ]
  },
  {
    label: "Archives",
    path: "/mode",
    submenu: [
      { label: "Tout voir", path: "/mode" },
      { label: "Dernières Chances", path: "/mode" }
    ]
  }
];

// 2. Menu "La Marque" (À insérer à droite)
const BRAND_MENU_ITEM = {
  label: "La Marque",
  path: "/",
  submenu: [
    { label: "L'Histoire", path: "/" },
    { label: "La Créatrice", path: "/" },
    { label: "Style", path: "/" },
    { label: "Guide d'entretien", path: "/" },
    { label: "Nos Lookbooks", path: "/" },
    { label: "Articles", path: "/" },
    { label: "Les Femmes", path: "/" },
    { label: "Production", path: "/" },
    { label: "Nos Matières", path: "/" },
    { label: "Nos Savoir-Faire", path: "/" },
    { label: "Nos Autres Engagements", path: "/" }
  ]
};

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">Livraison offerte dès 200€ d'achat</div>
      
      <nav className="navbar container">
        {/* --- GAUCHE : Menu Principal --- */}
        <ul className="nav-links">
          {LEFT_MENU_ITEMS.map((item, index) => (
            <li key={index} className="menu-item">
              <Link to={item.path} className="menu-link">{item.label}</Link>
              {item.submenu && (
                <ul className="dropdown">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.path}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
        {/* --- CENTRE : Logo --- */}
        <div className="logo">
          <Link to="/"><img src="/images/logo.png" alt="Marlida Paris" className="logo-img" /></Link>
        </div>

        {/* --- DROITE : La Marque + Icônes --- */}
        <div className="nav-icons">
          
          {/* ICI : On insère "La Marque" à la place de Recherche */}
          <div className="menu-item">
            <Link to={BRAND_MENU_ITEM.path} className="menu-link">
              {BRAND_MENU_ITEM.label}
            </Link>
            <ul className="dropdown dropdown-right"> {/* Ajout de la classe dropdown-right */}
              {BRAND_MENU_ITEM.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link to={subItem.path}>{subItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Les autres icônes */}
          <span>Compte</span>
          <span>Panier (0)</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;