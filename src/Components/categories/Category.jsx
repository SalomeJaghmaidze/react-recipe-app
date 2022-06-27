import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import {CategoryList, CategoryItem, CategoryTitle} from './CategoryStyles'
import {NavLink} from "react-router-dom"
import React from 'react'

function Category() {
  return (
    <CategoryList>
      <NavLink style={linkStyle} to={'/cuisine/Italian'}>
      <CategoryItem>
        <FaPizzaSlice style={iconStyle}></FaPizzaSlice>
        <CategoryTitle>Italian</CategoryTitle>
      </CategoryItem>
      </NavLink>

      <NavLink style={linkStyle} to={'/cuisine/American'}>
      <CategoryItem>
        <FaHamburger style={iconStyle}></FaHamburger>
        <CategoryTitle>American</CategoryTitle>
      </CategoryItem>
      </NavLink>

      <NavLink style={linkStyle} to={'/cuisine/Thai'}>
      <CategoryItem>
        <GiNoodles style={iconStyle}></GiNoodles>
        <CategoryTitle>Thai</CategoryTitle>
      </CategoryItem>
      </NavLink>    
    </CategoryList>
  )
}

const iconStyle = {
  color: 'white',
}

const linkStyle = {
  textDecoration: 'none',
}

export default Category