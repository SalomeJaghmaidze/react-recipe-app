import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-evenly;
  margin: 30px auto;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 60px;
  height: 60px;
  background: grey;
  border-radius: 50%;
  text-decoration: none;
`;

export const CategoryTitle = styled.h1`
  font-size: 10px;
  margin-top: 5px;
  color: white;
  text-decoration: none;
`;
