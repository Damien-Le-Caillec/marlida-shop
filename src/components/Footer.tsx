import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_LINKS = [
  {
    title: "Commande",
    links: [
      { label: "Suivre ma commande", path: "/compte" },
      { label: "Gérer mon retour", path: "/compte" },
      { label: "Mon compte", path: "/compte" }
    ]
  },
  {
    title: "Aide",
    links: [
      { label: "Contactez-nous", path: "/" },
      { label: "Retours & Échanges", path: "/" },
      { label: "Guide des tailles", path: "/" },
      { label: "FAQ", path: "/" }
    ]
  },
  {
    title: "À propos",
    links: [
      { label: "L'univers Marlida", path: "/" },
      { label: "Nos adresses", path: "/" },
      { label: "Recrutement", path: "/" }
    ]
  },
  {
    title: "Légal",
    links: [
      { label: "CGV", path: "/" },
      { label: "Politique de confidentialité", path: "/" },
      { label: "Mentions légales", path: "/" },
      { label: "Cookies", path: "/" }
    ]
  }
];

const Footer = () => {
  return (
    <div className="footer-wrapper">
      
      {/* 1. BARRE DE CONFIANCE (Avis, Paiement, Code Promo) */}
      <div className="trust-bar">
        <div className="container trust-content">
          
          {/* Bloc Avis */}
          <div className="trust-item">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span><strong>4.9/5</strong> sur 500 avis</span>
          </div>

          {/* Bloc Paiement */}
          <div className="trust-item">
            <i className="fa-solid fa-lock lock-icon"></i>
            <span>Paiement Sécurisé</span>
            <div className="payment-icons">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-paypal"></i>
              <i className="fa-brands fa-cc-apple-pay"></i>
            </div>
          </div>

          {/* Bloc Code Promo */}
          <div className="trust-item promo-item">
            <i className="fa-solid fa-gift"></i>
            <span>-10% Code : <strong>WELCOME10</strong></span>
          </div>

        </div>
      </div>

      {/* 2. FOOTER COMPACT (Menus Drop-up) */}
      <footer className="footer-compact">
        <div className="container footer-bar">
          
          {/* Navigation avec Menus Déroulants vers le HAUT */}
          <nav className="footer-nav">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index} className="dropup-container">
                <button className="dropup-title">
                  {section.title} <i className="fa-solid fa-caret-up arrow"></i>
                </button>
                
                <ul className="dropup-menu">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Newsletter Mini & Copyright */}
          <div className="footer-right">
            <div className="social-mini">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-tiktok"></i></a>
            </div>
            <span className="separator">|</span>
            <span className="copyright">© 2024 MARLIDA</span>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;