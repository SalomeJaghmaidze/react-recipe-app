import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {CategoryList, CategoryItem, CategoryTitle} from './CategoryStyles'
import {NavLink} from "react-router-dom"
import React from 'react'

function Category() {
  return (
    <CategoryList>
      <NavLink to={'/cuisine/Italian'}>
      <CategoryItem>
        <FaPizzaSlice></FaPizzaSlice>
        <CategoryTitle>Italian</CategoryTitle>
      </CategoryItem>
      </NavLink>

      <NavLink to={'/cuisine/American'}>
      <CategoryItem>
        <FaHamburger></FaHamburger>
        <CategoryTitle>American</CategoryTitle>
      </CategoryItem>
      </NavLink>

      <NavLink to={'/cuisine/Thai'}>
      <CategoryItem>
        <GiNoodles></GiNoodles>
        <CategoryTitle>Thai</CategoryTitle>
      </CategoryItem>
      </NavLink>

      <NavLink to={'/cuisine/Japanese'}>
      <CategoryItem>
        <GiChopsticks></GiChopsticks>
        <CategoryTitle>Japanese</CategoryTitle>
      </CategoryItem>
      </NavLink>
      
        
    </CategoryList>
  )
}

export default Category