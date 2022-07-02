import React, { useEffect } from 'react'
import { useState} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Grid, Card, Image, Title, } from './SearchedStyles'

function Searched() {
    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {

        const data = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=0b65a1d1b00b420d984dd5215667def2&query=" + name 
        );
        const recipes = await data.json();
        setSearched(recipes.results);
        console.log(recipes.results);
      };

    useEffect (()=> {
        getSearched(params.search);
    }, [params.search])

  return (
    <Grid >
      {searched.map((recipe) => {
        return (
            <Card key={recipe.id}>
              <Link to={"/recipe/" + recipe.id} style={{ textDecoration: "none" }}>
            <Image src={recipe.image} alt={recipe.title} />
              <Title>{recipe.title}</Title>
              </Link>
            </Card>
        );
      })}
    </Grid>
  )
}

export default Searched