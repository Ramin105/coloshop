import React from "react";
import styles from "./Icons.module.css";

const Icons = () => {
  return (
    <div className={styles.iconcontainer}>
      <div className={styles.iconcard}>
        <i style={{
          color:'red', fontSize:'20px'
        }} className="fa-solid fa-truck"></i>
        <div className={styles.icontext}>
          <h2 className={styles.free}>Free Shipping</h2>
          <span className={styles.form}>Suffered Alteration in Some Form</span>
        </div>
      </div>
      <div className={styles.iconcard}>
        <i style={{
          color:'red', fontSize:'20px'
        }} className="fa-solid fa-truck"></i>
        <div className={styles.icontext}>
          <h2 className={styles.free}>Free Shipping</h2>
          <span className={styles.form}>Suffered Alteration in Some Form</span>
        </div>
      </div>
      <div className={styles.iconcard}>
        <i style={{
          color:'red', fontSize:'20px'
        }} className="fa-solid fa-truck"></i>
        <div className={styles.icontext}>
          <h2 className={styles.free}>Free Shipping</h2>
          <span className={styles.form}>Suffered Alteration in Some Form</span>
        </div>
      </div>
      <div className={styles.iconcard}>
        <i style={{
          color:'red', fontSize:'20px'
        }} className="fa-solid fa-truck"></i>
        <div className={styles.icontext}>
          <h2 className={styles.free}>Free Shipping</h2>
          <span className={styles.form}>Suffered Alteration in Some Form</span>
        </div>
      </div>
    </div>
  );
};

export default Icons;
