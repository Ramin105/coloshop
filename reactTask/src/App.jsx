import React from "react";
import Header from "./components/header/Header";
import Imgcontainer from "./components/imgcontainer/Imgcontainer";
import Category from "./components/category/Category";
import { useState } from "react";
import Card from "./components/card/Card";
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  };
  return (
    <div style={{display:'flex',flexDirection:'column' ,alignItems:'center'}}>
      <Header />
      <Imgcontainer />
      <Category />
      <button onClick={() => getData()}>Get data</button>{" "}
      <div style={{width:'80%',display:'flex',flexWrap:'wrap'}}>{data && data.map((item) => <Card  item={item} />)}</div>
      
    </div>
  );
};

export default App;
