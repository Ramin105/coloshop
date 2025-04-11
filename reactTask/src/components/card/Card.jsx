import React from "react";
import styles from "./Card.module.css";
const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt="a" className={styles.img} />
      <span className={styles.title}>{item.title}</span>
      <span className={styles.price}>{item.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
