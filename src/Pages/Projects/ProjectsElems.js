import styled from "styled-components";

export const ContainerDiv = styled.div`
&::-webkit-scrollbar {
  display: none;
}
    position:absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 95%;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 0;
    background: black;
    overflow-x: hidden;
    overflow-y: auto;
`;
export const ProjectDiv = styled.div`
    position: relative ;
    top: 12%;
    width: 60rem;
    height:37rem;
    border-radius: 10%;
    border: 10px;
    border-color:rgba(250, 133, 9, 0.984);
    background-color:black;
    margin: 0 auto;
    @media only screen and (max-width: 1024px) {
    top: 50%;
    left:0;
    width: 35rem;
    margin: 0 auto;
    
    height: 25rem;
  }
`;

export const Title = styled.h1`
    position: relative;
    top: 10%;
    right: 3%;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    color: rgba(250, 133, 9, 0.984);
    @media only screen and (max-width: 1024px) {
        font-size: 1.6rem;
  }
`;
export const Explain = styled.p`
    position:relative;
    top: 5%;
    left: 5%;
    width: 80%;
    font-size:1.4rem;
    line-height: 1.8;
    margin: 0 auto;
    color:rgba(250, 133, 9, 0.984);
    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
  }
`;
export const ImportantParts = styled.em`
  color:black;
  font-style: italic;
  margin:0;
  padding:0;
`;