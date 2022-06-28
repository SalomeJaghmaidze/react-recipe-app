import React, { useState } from "react";
import { Form, Input } from "./SearchStyles";
import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

function Search() {
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  const getInput = (e) => {
    setInput(e.currentTarget.value);
  };

  const searchCuisine =(e)=> {
   e.preventDefault()
   navigate("/searched/" + input)
    };

  return (
    <Form onSubmit={searchCuisine}>
      <FaSearch></FaSearch>
      <input
        placeholder="Search for recipe"
        type="text"
        onChange={getInput}
      ></input>
    </Form>
  );
}

export default Search;
