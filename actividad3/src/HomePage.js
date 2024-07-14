import logo from './logo.svg';
import './HomePage.css';
import Button from '@mui/material/Button';
import head from './assets/head.png';
import ClothingCard from './components2/HomePage/ClothingCard';
import Footer from './components2/Footer';
import TopHomePage from './components2/HomePage/TopHomePage';
import Products from './components2/HomePage/Products';

function HomePage() {
  return (
    <main className="App">
    <TopHomePage/>      
    <hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
    
    <Products/> 
    <Footer/>
    </main>
    
  );
}

export default HomePage;
