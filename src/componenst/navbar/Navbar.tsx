// src/components/Navbar.tsx
import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.svg"
import hamburguer from "../../assets/icon-hamburger.svg"


type NavItem = {
  name: string;
  id: number;
};

const navItems: NavItem[] = [
  { name: 'how we work', id: 1 },
  { name: 'blog', id: 2 },
  { name: 'account', id: 3 },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  console.log(menuOpen)

  const handleClick = (id: number) => {
    setActiveItem(id);
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un elemento
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src={logo}></img>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <img src={hamburguer} alt="" className='hamburguer'/>
        </button>
      </div>
      <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`navbar-item ${item.id === activeItem ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </li>
        ))}
        <button className="boton">view plans</button> 
      </ul>
    </nav>
  );
};

export default Navbar;
