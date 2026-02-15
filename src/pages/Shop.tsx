import { Link, useParams } from 'react-router-dom';
import productsData from '../data.json';
import type { Product } from '../types';

interface ShopProps {
  category: Product['category'];
}

// Astuce anti-bug TypeScript
const products = (productsData as unknown) as Product[];

const Shop = ({ category }: ShopProps) => {
  // On récupère la sous-catégorie depuis l'URL (ex: "pantalons")
  const { subcategory } = useParams<{ subcategory: string }>();

  // FILTRAGE :
  // 1. On garde seulement la bonne catégorie principale (Mode ou Accessoires)
  // 2. SI une sous-catégorie est demandée, on filtre aussi par celle-ci
  const filteredProducts = products.filter(p => {
    const matchCategory = p.category === category;
    const matchSubCategory = subcategory ? p.subcategory === subcategory : true;
    return matchCategory && matchSubCategory;
  });

  return (
    <div className="container" style={{padding: "50px 0"}}>
      <h2 style={{textAlign: "center", marginBottom: "40px", textTransform:"capitalize"}}>
        {subcategory ? `${category} - ${subcategory}` : category}
      </h2>
      
      {filteredProducts.length === 0 ? (
        <p style={{textAlign: "center"}}>Aucun produit trouvé dans cette catégorie pour le moment.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="card-info">
                <h4>{product.name}</h4>
                <p>{product.price} €</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;