import styled from "styled-components";

export const AboutMeDiv = styled.div`
    position: relative;
    top: 36%;
    left:3%;
    width: 50rem;
    height:20rem;
    border-radius: 2%;
    background-color:#c9c9c9;
    @media only screen and (max-width: 1024px) {
    top: 30%;
    left:0;
    width: 35rem;
    margin: 0 auto;
    
    height: 15rem;
  }
`;
export const Title = styled.h1`
    position: absolute;
    top: 5%;
    left:5%;
    width: 35%;
    color: rgba(250, 133, 9, 0.984);
    @media only screen and (max-width: 1024px) {
        font-size: 1.6rem;
  }
`;
export const Explain = styled.p`
    position:absolute;
    top: 20%;
    left: 5%;
    width: 80%;
    font-size:1.4rem;
    line-height: 1.8;
    color:black;
    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
  }
`;