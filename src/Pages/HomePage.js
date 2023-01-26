import React from "react";
import { AboutMe } from "./AboutMe/AboutMe";
import { ContainerDiv, LastDiv, MyImg, NameTitle } from "./HomePageElement";
import pic from "../images/emirhan.png" 
import { Experiences } from "./Experience/Experience";


export const HomePage = ()=>{

    return(
    <ContainerDiv>
    
        <MyImg src={pic} ></MyImg>
        <NameTitle>Ahmet Emirhan Kaya</NameTitle>
        <AboutMe/>
        <Experiences/>
        
        <LastDiv></LastDiv>
    </ContainerDiv>
        )
}