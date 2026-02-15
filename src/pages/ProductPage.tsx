import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data.json';
import type { Product } from '../types';
import './ProductPage.css';

const products = (productsData as unknown) as Product[];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || '0'));
  
  // État pour savoir quelle image on regarde (0 = la première)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return <div className="container">Produit introuvable.</div>;

  // Sécurité : Si 'images' n'existe pas dans le JSON, on utilise juste 'image'
  const gallery: string[] = Array.isArray(product.images) ? product.images : [product.image];

  // Fonctions pour changer d'image
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="container product-page">
      
      {/* GAUCHE : LE CARROUSEL */}
      <div className="product-gallery">
        <div className="main-image-wrapper">
          {/* Bouton Précédent (affiché seulement s'il y a plusieurs images) */}
          {gallery.length > 1 && (
            <button className="nav-btn prev" onClick={prevImage}>❮</button>
          )}

          <img src={gallery[currentImageIndex]} alt={product.name} className="main-image" />

          {/* Bouton Suivant */}
          {gallery.length > 1 && (
            <button className="nav-btn next" onClick={nextImage}>❯</button>
          )}
        </div>

        {/* Petites miniatures en dessous */}
        {gallery.length > 1 && (
          <div className="thumbnails">
            {gallery.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Vue ${index}`} 
                className={index === currentImageIndex ? "thumb active" : "thumb"}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* DROITE : INFOS PRODUIT (Inchangé) */}
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">{product.price} €</p>
        <p className="description">{product.description}</p>
        
        <div className="composition">
          <strong>Composition:</strong> {product.composition}
        </div>

        <button className="btn-primary" onClick={() => alert("Ajouté au panier")}>
          Ajouter au panier
        </button>

        <div className="extras">
          <p>Livraison & Retours</p>
          <p>Guide des tailles</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;