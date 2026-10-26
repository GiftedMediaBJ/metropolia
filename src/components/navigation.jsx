import { NavLink } from 'react-router-dom';

import styles from '../styles/navigation.module.css'

export const Navigation = () => {

  return (
    <nav>
      <NavLink to="/">
        {({ isActive }) => (
          <button className={`${styles.button} ${isActive ? styles.active : ''}`}>
            Home
          </button>
        )}
      </NavLink>

      <NavLink to="/about">
        {({ isActive }) => (
          <button className={`${styles.button} ${isActive ? styles.active : ''}`}>
            About
          </button>
        )}
      </NavLink>

      <NavLink to="/contact">
        {({ isActive }) => (
          <button className={`${styles.button} ${isActive ? styles.active : ''}`}>
            Contact
          </button>
        )}
      </NavLink>
    </nav>
  )
}