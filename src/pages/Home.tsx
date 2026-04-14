import { Link } from 'react-router-dom';
import productsData from '../data.json';
import type { Product } from '../types';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const products = (productsData as unknown) as Product[];

const Home = () => {
  // Filtrer les nouveautés
  const newCollection = products.filter(product => product.isNew);
  
  // Référence pour le défilement
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fonction de défilement
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h2>Ilhoa</h2>
          <Link to="/mode" className="btn-primary">Découvrir</Link>
        </div>
      </div>

      <section className="new-collection-carousel">
        <div className="section-header">
          <h2>Nouvelle collection</h2>
          
        </div>

        <div className="carousel-container" ref={scrollRef}>
          {newCollection.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="carousel-item">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className="tag-new">Nouveau</span>}
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.price}€</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="carousel-controls">
            <button onClick={() => scroll('left')}><ChevronLeft size={24} /></button>
            <button onClick={() => scroll('right')}><ChevronRight size={24} /></button>
        </div>
      </section>
      <section className="categories-grid">
        <div className="categories-top">
          <Link to="/robes" className="category-card">
            <img src="/marlida-shop/images/naia/naia-port.webp" alt="Robes" />
            <div className="category-overlay">
              <h3>Robes</h3>
              <span className="btn-discover">Découvrir</span>
            </div>
          </Link>
          <Link to="/pantalons" className="category-card">
            <img src="/marlida-shop/images/amarilis/amarilis-port.webp" alt="Pantalons" />
            <div className="category-overlay">
              <h3>Pantalons</h3>
              <span className="btn-discover">Découvrir</span>
            </div>
          </Link>
        </div>
        
        <div className="categories-bottom">
          <Link to="/jupes" className="category-card">
            <img src="https://placehold.co/600x800/EAD6C4/3D2114?text=Jupes" alt="Jupes" />
            <div className="category-overlay">
              <h3>Jupes</h3>
              <span className="btn-discover">Découvrir</span>
            </div>
          </Link>
          <Link to="/accessoires" className="category-card">
            <img src="/marlida-shop/images/craveiro/craveiro.webp" alt="Accessoires" />
            <div className="category-overlay">
              <h3>Accessoires</h3>
              <span className="btn-discover">Découvrir</span>
            </div>
          </Link>
          <Link to="/tops" className="category-card">
            <img src="/marlida-shop/images/marea/marea-port.webp" alt="Tops" />
            <div className="category-overlay">
              <h3>Tops</h3>
              <span className="btn-discover">Découvrir</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="reassurance-bar">
        <div className="reassurance-item">
          <h4>Livraison offerte</h4>
          <p>Dès 250€ d'achat</p>
        </div>
        <div className="reassurance-item">
          <h4>Paiement sécurisé</h4>
          <p>Paiement en 3x ou 4x sans frais</p>
        </div>
        <div className="reassurance-item">
          <h4>Retour facilité</h4>
          <p>Retours et échanges sous 15 jours</p>
        </div>
      </section>
    </div>
  );
};

export default Home;