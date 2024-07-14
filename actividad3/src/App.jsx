import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductDetailPage from './components/ProductDetailPage'; // Asegúrate de tener la ruta correcta para ProductDetailPage

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Define aquí otras rutas si es necesario */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          {/* Ruta por defecto o adicional */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
