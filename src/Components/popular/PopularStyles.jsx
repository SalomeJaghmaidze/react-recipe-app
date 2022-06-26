import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Header = styled.h3`
margin-bottom: 20px;
`;

export const Card = styled.div`
  overflow: hidden;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Content = styled.div``;
export const Title = styled.p`
  position: relative;
  font-size: 18px;
  color: white;
  z-index: 10;
  margin-bottom: 15px;
  text-align: center;
`;
export const Image = styled.img`
  border-radius: 40px;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;

export const Gradient = styled.div`
 z-index: 3;
 position: absolute;
 width: 100%;
 height: 100%;
 background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
 border-radius: 40px;
`