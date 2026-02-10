import { Link } from 'react-router-dom';
import productsData from '../data.json';
import { Product } from '../types';

// Ici, on dit que Shop attend forcément une prop "category" qui est une chaine de caractères
interface ShopProps {
  category: string;
}

const products: Product[] = productsData as Product[];

const Shop = ({ category }: ShopProps) => {
  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div className="container" style={{padding: "50px 0"}}>
      <h2 style={{textAlign: "center", marginBottom: "40px", textTransform:"capitalize"}}>{category}</h2>
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
    </div>
  );
};

export default Shop;