import React from 'react';
import TopHomePage from './components2/HomePage/TopHomePage';
import Products from './components2/HomePage/Products';
import Footer from './components2/Footer';
import ProductDetails from './components2/HomePage/ProductDetailPage';

function HomePage() {
  return (
    <main className="App">
      <TopHomePage />      
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-25 dark:via-neutral-400" />
      <Products />
      <Footer />
    </main>
  );
}

export default HomePage;
