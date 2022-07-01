import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, TitleSection, InfoSection, Buttons } from "./RecipeStyles";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDeatils = async (name) => {
    const data = await fetch(
      "https://api.spoonacular.com/recipes/" +
        params.name +
        "/information?apiKey=0b65a1d1b00b420d984dd5215667def2"
    );
    const recipes = await data.json();
    setDetails(recipes);
    console.log(details);
  };

  useEffect(() => {
    fetchDeatils();
  }, [params.name]);
  return (
    <Wrapper>
      <TitleSection>
        <h1>{details.title}</h1>
        <img src={details.image} alt="" />
      </TitleSection>
      <InfoSection>
        <Buttons>
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </Buttons>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </InfoSection>
    </Wrapper>
  );
}

export default Recipe;
