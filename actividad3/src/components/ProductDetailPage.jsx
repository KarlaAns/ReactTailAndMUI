import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Importar estilos personalizados

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de llamada a API para obtener los detalles del producto
    const fetchProductById = async (id) => {
      // Llamada a la API aquí
      // const response = await fetch(`https://api.example.com/products/${id}`);
      // const data = await response.json();
      // setProduct(data);

      // Datos de ejemplo
      const data = {
        id: id,
        name: 'Nombre del Producto',
        description: 'Descripción detallada del producto.',
        price: 99.99,
        imageUrl: 'https://via.placeholder.com/300',
      };
      setProduct(data);
    };

    fetchProductById(id);
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2 className="product-detail-name">{product.name}</h2>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <button className="add-to-cart-button">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
