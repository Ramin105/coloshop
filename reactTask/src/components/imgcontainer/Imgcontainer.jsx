import React from "react";
import styles from "./Imgcontainer.module.css";
const Imgcontainer = () => {
  return (
    <div className={styles.imgbox}>
      <img
        src="https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg.webp"
        alt=""
      />
      <div className={styles.imgText}>
        <p>Spring / Summer Collection 2017</p>{" "}
        <h1>Get up to 30% Off New Arrivals</h1> <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Imgcontainer;
