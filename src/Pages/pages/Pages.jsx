import React from "react";
import Home from "../home/Home";
import Cuisine from "../cuisine/Cuisine";
import Searched from "../search/Searched"
import Recipe from "../recipe/Recipe";
import { Routes, Route, Link,} from "react-router-dom";

function Pages() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      
  );
}

export default Pages;
