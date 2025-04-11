import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Imgcontainer from "./components/imgcontainer/Imgcontainer";
import Category from "./components/category/Category";
import Card from "./components/card/Card";
import axios from "axios";
import Time from "./components/time/Time";
import Best from "./components/best/Best";
import Icons from "./icons/Icons";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    setFilteredData(res.data); // Initialize filteredData with all products
  };

  useEffect(() => {
    getData();
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => 
        category === "womens" ? item.category === "women's clothing" :
        category === "mens" ? item.category === "men's clothing" :
        item.category === category.toLowerCase()
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <Imgcontainer />
      <Category />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "55px" }}>New Arrivals</h1>
          <div
            style={{
              margin: "20px 0",
              width: "50px",
              height: "5px",
              backgroundColor: "red",
            }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={() => filterByCategory("all")}
            style={{
              backgroundColor: activeCategory === "all" ? "#f0f0f0" : "transparent",
              color: "black",
              padding: "20px",
              opacity: 1,
              border: "none",
              cursor: "pointer",
              fontWeight: activeCategory === "all" ? "bold" : "normal",
            }}
          >
            All
          </button>
          <button
            onClick={() => filterByCategory("womens")}
            style={{
              backgroundColor: activeCategory === "womens" ? "#f0f0f0" : "transparent",
              color: "black",
              padding: "20px",
              opacity: 1,
              border: "none",
              cursor: "pointer",
              fontWeight: activeCategory === "womens" ? "bold" : "normal",
            }}
          >
            Womens
          </button>
          <button
            onClick={() => filterByCategory("jewelery")}
            style={{
              backgroundColor: activeCategory === "jewelery" ? "#f0f0f0" : "transparent",
              color: "black",
              padding: "20px",
              opacity: 1,
              border: "none",
              cursor: "pointer",
              fontWeight: activeCategory === "jewelery" ? "bold" : "normal",
            }}
          >
            Accessories
          </button>
          <button
            onClick={() => filterByCategory("mens")}
            style={{
              backgroundColor: activeCategory === "mens" ? "#f0f0f0" : "transparent",
              color: "black",
              padding: "20px",
              opacity: 1,
              border: "none",
              cursor: "pointer",
              fontWeight: activeCategory === "mens" ? "bold" : "normal",
            }}
          >
            Mens
          </button>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {filteredData && filteredData.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
      <Time />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px 0px",
        }}
      >
        <h1>Best Sellers</h1> <Best />
      </div>
      <Icons />
      <div
        style={{
          marginTop: "45px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Latest Blogs</h1>
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default App;