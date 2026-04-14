import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data.json';
import { Heart, Plus, Minus } from 'lucide-react';
import './ProductPage.css';

// Définition de l'interface pour corriger les erreurs TypeScript (L'erreur "Cannot find name Product")
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  description?: string;
  color?: string;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Cast propre des données pour éviter l'erreur "Unexpected any"
  const products = productsData as unknown as Product[];
  const product = products.find((p) => String(p.id) === id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlist, setIsWishlist] = useState<boolean>(false);

  // Remonter automatiquement en haut de page lors du changement de produit
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-error" style={{ padding: '100px', textAlign: 'center', backgroundColor: '#fdfcf8' }}>
        <p>Produit introuvable</p>
        <Link to="/" style={{ textDecoration: 'underline', color: '#1a1a1a' }}>Retour à l'accueil</Link>
      </div>
    );
  }

  // Sécurité pour l'affichage des images (tableau d'images ou image principale)
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="rouje-product-page">
      {/* --- COLONNE GAUCHE : GRILLE D'IMAGES (50% - Défilante) --- */}
      <div className="product-images-column">
        {productImages.map((img: string, index: number) => (
          <div className="product-image-wrapper" key={index}>
            <img src={img} alt={`${product.name} - vue ${index}`} />
          </div>
        ))}
      </div>

      {/* --- COLONNE DROITE : INFORMATIONS (50% - Sticky) --- */}
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

          {/* SÉLECTEUR DE TAILLES */}
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

          {/* SÉLECTEUR DE QUANTITÉ */}
          <div className="product-quantity-selector">
            <label>Quantité</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Moins">
                <Minus size={14} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} aria-label="Plus">
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* ACTIONS D'ACHAT */}
          <div className="product-actions-group">
            <button className="btn-add-to-cart">
              Ajouter au panier
            </button>
            <button 
              className={`btn-wishlist ${isWishlist ? 'active' : ''}`}
              onClick={() => setIsWishlist(!isWishlist)}
              aria-label="Ajouter aux favoris"
            >
              <Heart size={20} fill={isWishlist ? "#1a1a1a" : "none"} />
            </button>
          </div>

          {/* ACCORDÉONS DÉTAILS */}
          <div className="product-details-accordion">
            <details open>
              <summary>Composition & Entretien</summary>
              <div className="accordion-content">
                <p>Matière principale : 100% Matières naturelles.</p>
                <p>Confectionné avec soin. Nettoyage à sec ou lavage délicat à la main recommandé pour préserver la fibre.</p>
              </div>
            </details>
            <details>
              <summary>Livraison & Retours</summary>
              <div className="accordion-content">
                <p>Livraison standard offerte en France dès 250€ d'achat.</p>
                <p>Retours possibles sous 15 jours après réception de votre commande.</p>
              </div>
            </details>
          </div>

        </div>
      </aside>
    </div>
  );
};

export default ProductPage;