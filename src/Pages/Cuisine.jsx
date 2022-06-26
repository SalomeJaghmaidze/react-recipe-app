import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  Header,
  Card,
  Content,
  Title,
  Image,
  Gradient,
} from "../Components/popular/PopularStyles";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=0b65a1d1b00b420d984dd5215667def2&cuisine=${name}"
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div>
      {/* {cuisine.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Card>
              <Image src={recipe.image} alt={recipe.title} />
              <Title>{recipe.title}</Title>
              <Gradient></Gradient>
            </Card>
          </div>
        );
      })} */}
    </div>
  );
}

export default Cuisine;
