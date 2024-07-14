import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Product() {
  const { id } = useParams();

  return (
    <ProductCard product={{ title: `Product ${id}`, description: `Description ${id}`, image: 'https://via.placeholder.com/200' }} />
  );
}

export default Product;