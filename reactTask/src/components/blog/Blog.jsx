import React from "react";
import styles from "./Blog.module.css";
const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.mesaj}>
          Here are the trends I see coming this fall by admin | dec 01, 2017
          Read more
        </div>
      </div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
};

export default Blog;
