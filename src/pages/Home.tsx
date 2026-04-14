import { Link } from 'react-router-dom';
import productsData from '../data.json';
import type { Product } from '../types';
import './Home.css';

const products = (productsData as unknown) as Product[];

const Home = () => {
  const newCollection = products.filter(p => p.isNew).slice(0, 3);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h2>Ilhoa</h2>
          <Link to="/mode" className="btn-primary">Découvrir</Link>
        </div>
      </div>

      <section className="section-new">
        
        <div className="container">
          <h3>Nouvelle collection</h3>
          
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
        </div>
        
      </section>
    </div>
  );
};

export default Home;