import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        {/* AJOUT : On met le contenu dans une boite "main-content" */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mode" element={<Shop category="mode" />} />
            <Route path="/mode/:subcategory" element={<Shop category="mode" />} />
            <Route path="/accessoires" element={<Shop category="accessoires" />} />
            <Route path="/accessoires/:subcategory" element={<Shop category="accessoires" />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;