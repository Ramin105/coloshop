import React from "react";
import styles from "./Category.module.css";
const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="	https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
          alt=""
        />
        <div className={styles.cardtext}><h3>WOMEN'S</h3></div>
      </div>
      
      <div className={styles.card}>
        <img
          src="	https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
          alt=""
        />
        <div className={styles.cardtext}><h3>ACCESSORIES'S</h3></div>
      </div>
      <div className={styles.card}>
        <img
          src="	https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
          alt=""
        />
        <div className={styles.cardtext}><h3>MEN'S</h3></div>
      </div>
    </div>
  );
};

export default Category;
