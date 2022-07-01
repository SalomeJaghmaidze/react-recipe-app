import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;
export const TitleSection = styled.div`
  margin-right: 50px;
  img {
    margin-top: 50px;
    margin-left: -50px;
    max-width: 500px;
  }

  h1 {
    font-size: 25px;
  }
`;

export const InfoSection = styled.div`
  p {
    font-size: 16px;
    line-height: 1.4;
    margin-top: 30px;
  }

  ul li {
    font-size: 14px;
    line-height: 0.6;
    margin-top: 30px;
    margin-left: 20px;
  }
`;
export const Buttons = styled.div`
  button {
    border: none;
    background: white;
    border: 1px solid black;
    padding: 10px 26px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-right: 20px;
  }
`;
