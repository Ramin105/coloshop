import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Imgcontainer from "./components/imgcontainer/Imgcontainer";
import Category from "./components/category/Category";
import { useState } from "react";
import Card from "./components/card/Card";
import axios from "axios";
import Time from "./components/time/Time";
import Best from "./components/best/Best";
import Icons from "./icons/Icons";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <Imgcontainer />
      <Category />
      <div
        style={{ width: "80%", display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {data && data.map((item) => <Card item={item} />)}
      </div>
      <Time />
      <Best />
      <Icons />
      <Blog/>
      <Footer/>
    </div>
  );
};

export default App;
