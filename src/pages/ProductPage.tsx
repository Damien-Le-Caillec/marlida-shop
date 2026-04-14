import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data.json';
import { Heart, Plus, Minus } from 'lucide-react';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Correction du filtrage pour éviter les erreurs de type
  const product = (productsData as any[]).find((p) => String(p.id) === id);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);

  // Remonter en haut de page au changement de produit
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-error">
        <p>Produit introuvable</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    );
  }

  // Sécurité pour les images
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="rouje-product-page">
      {/* --- COLONNE GAUCHE : IMAGES --- */}
      <div className="product-images-column">
        {productImages.map((img: string, index: number) => (
          <div className="product-image-wrapper" key={index}>
            <img src={img} alt={`${product.name} - ${index}`} />
          </div>
        ))}
      </div>

      {/* --- COLONNE DROITE : INFOS STICKY --- */}
      <aside className="product-info-column">
        <div className="product-info-sticky-wrapper">
          
          <nav className="product-breadcrumb">
            <Link to="/">Accueil</Link> / {product.category}
          </nav>

          <div className="product-header">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{product.price}€</p>
          </div>

          <div className="product-meta">
            <p>Couleur : <strong>{product.color || 'Unique'}</strong></p>
          </div>

          {/* TAILLES */}
          <div className="product-size-selector">
            <div className="size-selector-header">
              <label>Taille : <strong>{selectedSize || 'Sélectionner'}</strong></label>
              <button className="size-guide-link">Guide des tailles</button>
            </div>
            <div className="size-buttons-grid">
              {['34', '36', '38', '40', '42'].map(size => (
                <button 
                  key={size}
                  className={`size-option-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITÉ */}
          <div className="product-quantity-selector">
            <label>Quantité</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="product-actions-group">
            <button className="btn-add-to-cart">Ajouter au panier</button>
            <button 
              className={`btn-wishlist ${isWishlist ? 'active' : ''}`}
              onClick={() => setIsWishlist(!isWishlist)}
            >
              <Heart size={20} fill={isWishlist ? "#1a1a1a" : "none"} />
            </button>
          </div>

          {/* ACCORDÉONS */}
          <div className="product-details-accordion">
            <details open>
              <summary>Composition & Entretien</summary>
              <div className="accordion-content">
                <p>Matière principale : 100% Matières naturelles.</p>
                <p>Nettoyage à sec ou lavage délicat recommandé.</p>
              </div>
            </details>
            <details>
              <summary>Livraison & Retours</summary>
              <div className="accordion-content">
                <p>Livraison offerte dès 250€.</p>
                <p>Retours sous 15 jours.</p>
              </div>
            </details>
          </div>

        </div>
      </aside>
    </div>
  );
};

export default ProductPage;