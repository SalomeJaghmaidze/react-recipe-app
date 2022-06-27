import React from "react";
import Home from "../home/Home";
import Cuisine from "../cuisine/Cuisine";
import { Routes, Route, Link,} from "react-router-dom";

function Pages() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
      
  );
}

export default Pages;
