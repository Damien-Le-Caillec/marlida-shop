import { Link } from 'react-router-dom';
import productsData from '../data.json';
import { Product } from '../types';
import './Home.css';

// On force le typage du JSON pour être sûr
const products: Product[] = productsData as Product[];

const Home = () => {
  const newCollection = products.filter(p => p.isNew).slice(0, 3);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h2>Nouvelle Collection</h2>
          <Link to="/mode" className="btn-primary">Découvrir</Link>
        </div>
      </div>

      <section className="container section-new">
        <h3>Nouveautés</h3>
        <div className="product-grid">
          {newCollection.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="card-info">
                <h4>{product.name}</h4>
                <p>{product.price} €</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;