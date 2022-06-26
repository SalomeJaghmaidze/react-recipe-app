import React, { useEffect, useState } from 'react'
import {
  Wrapper,
  Header,
  Card,
  Content,
  Title,
  Image,
  Gradient,
} from "./VeggieStyles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Veggie() {
  const [veggie, Setveggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const Check = localStorage.getItem("veggie");

    if (Check) {
      Setveggie(JSON.parse(Check));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=0b65a1d1b00b420d984dd5215667def2&number=9&tags=vegetarian"
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      Setveggie(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
      <>
        <Wrapper>
          <Header>Our Vegetarian Picks</Header>
          <Content>
            <Splide
              options={{
                perPage: 3,
                drag: "free",
                gap: "50px",
                pagination: false
              }}
            >
              {veggie.map((recipe) => {
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
  )
}

