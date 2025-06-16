import styles from './AuthNav.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div className={styles.authNavContainer}>
      <NavLink
        className={({ isActive }) => {
          return clsx(styles.authNavLink, isActive && styles.authNavActiveLink);
        }}
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return clsx(styles.authNavLink, isActive && styles.authNavActiveLink);
        }}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
}