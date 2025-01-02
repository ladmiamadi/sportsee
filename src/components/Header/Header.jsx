import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router';

const Header = () => {
     return (
          <div className={styles.header}>
               <Link to="/">
                    <img
                         src={Logo}
                         alt="Logo de sportSee"
                         className={styles.logo}
                    />
               </Link>
               <nav>
                    <ul className={styles.menu}>
                         <li>
                              <Link to="/">Accueil</Link>
                         </li>
                         <li>
                              <Link to="/">Profil</Link>
                         </li>
                         <li>
                              <Link to="/">Réglage</Link>
                         </li>
                         <li>
                              <Link to="/">Communauté</Link>
                         </li>
                    </ul>
               </nav>
          </div>
     );
};

export default Header;
