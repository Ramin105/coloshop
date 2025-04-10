import React from "react";
import styles from "./Card.module.css";
const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt="a" className={styles.img} />
      <span>{item.title}</span>
      {item.price}
      <span></span>
    </div>
   
  );
};

export default Card;
