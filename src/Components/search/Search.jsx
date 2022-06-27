import React, { useState } from "react";
import { Form, Input } from "./SearchStyles";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");

  const getInput = (e) => {
    setInput(e.currentTarget.value);
    console.log(input);
  };

  const searchCuisine =(e)=> {
   e.preventDefault()
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
