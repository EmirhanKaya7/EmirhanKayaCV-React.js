import React from "react";
import { ExperienceDiv, Explain, ImportantParts, Title } from "./ExperienceStyle";

export const Experiences = ()=>{
    return(
        <ExperienceDiv>
            <Title>
                Experience
            </Title>
            <Explain>
                - You can access my all projects in projects page. You can go to that page by clicking <a href ="/projects">Project Page</a>.
            </Explain>
            <Explain>
                - I was an intern in Monovi Software company. I was a full-stack developer. We developed a Web app for Warehouse Management. I learned <ImportantParts> SQL, Powerapps</ImportantParts>
                . Analyzed how warehouse management works. 
            </Explain>
            <Explain>
                - I'm currently an Intern in <a href="https://digimindmarket.com/">DigiMindMarket</a> working as a Game Developer. We are developing 2D and 3D hyper-casual / casual mobile games.
            </Explain>
            
        </ExperienceDiv>
    )
}