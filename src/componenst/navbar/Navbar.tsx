// src/components/Navbar.tsx
import React, { useState } from 'react';
import styles from "./Navbar.module.css"
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
  const [botonForm, setBotonForm] = useState (false)
  console.log(menuOpen)

  const handleClick = (id: number) => {
    setActiveItem(id);
    setMenuOpen(false); // Cerrar el menú después de hacer clic en un elemento
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toogleBoton = () => {
    setBotonForm (!botonForm);
    console.log(botonForm)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
      <img src={logo}></img>
        <button className={styles.navbarToggler} onClick={toggleMenu}>
          <img src={hamburguer} alt="" className={styles.hamburguer}/>
        </button>
      </div>
      <ul className={`${styles.navbarList} ${menuOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`${styles.navbarItem} ${item.id === activeItem ? styles.active : ''}`}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </li>
        ))}
        <button className={styles.boton} onClick={toogleBoton}>view plans</button> 
      </ul>
    </nav>
  );
};

export default Navbar;
