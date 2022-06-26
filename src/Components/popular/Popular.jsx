import React, { useEffect, useState } from "react";

import {
  Wrapper,
  Header,
  Card,
  Content,
  Title,
  Image,
  Gradient,
} from "./PopularStyles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, SetPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const Check = localStorage.getItem("popular");

    if (Check) {
      SetPopular(JSON.parse(Check));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=0b65a1d1b00b420d984dd5215667def2&number=9"
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      SetPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <>
        <Wrapper>
          <Header>Popular Picks</Header>
          <Content>
            <Splide
              options={{
                perPage: 4,
                drag: "free",
                gap: "50px",
                pagination: false
              }}
            >
              {popular.map((recipe) => {
                return (
                  <SplideSlide key={recipe.id}>
                    <Card>
                      <Image src={recipe.image} alt={recipe.title} />
                      <Title>{recipe.title}</Title>
                      <Gradient></Gradient>
                    </Card>
                  </SplideSlide>
                );
              })}
            </Splide>
          </Content>
        </Wrapper>
      </>
    </div>
  );
}

export default Popular;
