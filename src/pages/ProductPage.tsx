import { useParams } from 'react-router-dom';
import productsData from '../data.json';
import type { Product } from '../types';
import './ProductPage.css';

const products: Product[] = productsData as Product[];

const ProductPage = () => {
  // On précise que l'URL contient un paramètre "id" qui est une string
  const { id } = useParams<{ id: string }>();
  
  // On convertit l'ID de string vers number, et on gère le cas où id est undefined
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) return <div className="container">Oups ! Produit introuvable.</div>;

  return (
    <div className="container product-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">{product.price} €</p>
        <p className="description">{product.description}</p>
        
        <div className="composition">
          <strong>Composition:</strong> {product.composition}
        </div>

        <button className="btn-primary" onClick={() => alert("Ajouté au panier (Simulation)")}>
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