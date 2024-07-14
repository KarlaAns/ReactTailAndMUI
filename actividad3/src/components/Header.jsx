import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'; // Importar estilos personalizados

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static" className="App-header">
      <Toolbar className="toolbar">
        <Typography variant="h5" component="div" className="nav-link brand">
          Tienda de Ropa
        </Typography>

        <div className="hidden lg:flex lg:ml-auto lg:space-x-4">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/products" className="nav-link" onClick={closeMenu}>
            Productos
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contacto
          </Link>
        </div>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuToggle}
          className="menu-button lg:hidden"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {menuOpen && (
        <div className="bg-dorado-800 text-dorado-50 p-4 lg:hidden absolute top-14 right-0 w-36">
          <Link to="/" className="block mb-2 nav-link" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/products" className="block mb-2 nav-link" onClick={closeMenu}>
            Productos
          </Link>
          <Link to="/contact" className="block nav-link" onClick={closeMenu}>
            Contacto
          </Link>
        </div>
      )}
    </AppBar>
  );
}

export default Header;
