import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { HomePage } from "./Pages/HomePage";
import { Projects } from "./Pages/Projects/Projects";
  export const Routers= ()=>{
    return(
        <Router>
         <Navbar/>
            <Routes>
            <Route path="/">
           

                <Route path="/" element = {<HomePage/>}/>
                <Route path="https://emirhankayacv.net/projects" element = {<Projects/>}/>
                
                
                


            </Route>
            </Routes>
        </Router>
    )
  }