import React from "react";
import styles from "./Time.module.css";
const Time = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgbox}>
        <img
          src="	https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png"
          alt=""
        />
      </div>
      <div className={styles.timebox}>
        <div className={styles.header}> 
          <h1>Deal Of The Week</h1>
          <div className={
            styles.border
          }></div>
        </div>
        <div className={styles.time}>
          <div className={styles.time1}>
            <h2 className={
                styles.reqem
            }>2</h2>
            <h2>Day</h2>
          </div>
          <div className={styles.time1}>
            <h2  className={
                styles.reqem
            }>23</h2>
            <h2>Hours</h2>
          </div>
          <div className={styles.time1}>
            <h2  className={
                styles.reqem
            }>47</h2>
            <h2>Mins</h2>
          </div>
          <div className={styles.time1}>
            <h2  className={
                styles.reqem
            }>10</h2>
            <h2>Sec</h2>
          </div>
        </div>
        <button className={styles.shop}>
            SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Time;
