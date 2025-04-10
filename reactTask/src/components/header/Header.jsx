import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.colo}>
        COLO<span className={styles.shop}>SHOP</span>
      </span>
      <div className={styles.nav}>
        <p>Home</p>
        <p>Shop</p>
        <p>Promotion</p>
        <p>Pages</p>
        <p>Blog</p>
        <p>Contact</p>
        <div className={styles.iconnav}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
