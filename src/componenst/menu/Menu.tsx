// src/components/Menu.tsx
import React, { useState } from 'react';
import style from "./Menu.module.css"

type MenuItem = {
  name: string;
  id: number;
};

const menuItems: MenuItem[] = [
  { name: 'Home', id: 1 },
  { name: 'About', id: 2 },
  { name: 'Contact', id: 3 },
];

const Menu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveItem(id);
  };

  return (
    <ul className={style.menu}>
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={item.id === activeItem ? 'active' : ''}
          onClick={() => handleClick(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
