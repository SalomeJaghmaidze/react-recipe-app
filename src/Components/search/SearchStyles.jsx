import styled from "styled-components";

export const Form = styled.form`
border: 1px solid black
width: 100%;
text-align:center;
position: relative;


input {
    width: 50%;
    margin: 20px 0;
    padding: 10px 10px 10px 40px;
    border-radius: 10px;
    outline: none;
    background-color: gray;
    border: 0px solid;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    color: white;

    ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
    
  }
  :-ms-input-placeholder {
     width: 90%
  }
}

svg {
    position: absolute;
    top: 40%;
    left: 26%;
    color: white;
    // transform: translate (100%, -50%)
}

::placeholder,
  ::-webkit-input-placeholder {
    color: red;
  }
  :-ms-input-placeholder {
     color: red;
  }
`;




