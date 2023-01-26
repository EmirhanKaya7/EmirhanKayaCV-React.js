import React from "react";
import { ContainerDiv } from "../HomePageElement";
import "./ProjectsElems"
import { Explain, ProjectDiv, Title } from "./ProjectsElems";

export const Projects = ()=>{

    return(<ContainerDiv>

<Title>Projects</Title>
        <ProjectDiv>
        <Explain>• Maze Generation-Pathfinder (Templated Stack) (C++) 
        <br/>
        • Minesweeper Game (Matrixes) (C++)
        <br/>
        • Bus Lines-Bus Stops Implementation (Linked Lists) (C++)
        <br/>
        • Templated Data Structures (Trees, Hash table) (C++)
        <br/>
        • Sorting Algorithms (C++)
        <br/>
        • Warehouse Management Database and App in PowerApps (SQL)
        <br/>
        • Data Analytics(Collection, Cleaning, Exploratory Techniques, Modelling and Presentation) (Python)
        <br/>
        • Machine Learning (Python)
        <br/>
        • Business Analytics Cases ( MS Excel - R Studio)
        <br/>
        • Social Media App (Dart-Flutter)
        <br/>
        • Basic social media website (HTML-CSS-PHP-MySQL)
        <br/>
        • Full Stack Development for Website ( React.js, Node.js. MongoDB) 
        <br/>
        • 3D/2D hypercasual mobile games (Unity)
        </Explain>
        </ProjectDiv>

    </ContainerDiv>
    )
}