import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../index.css';
import Contact from "./Contact";
import Info from "./Info";
import Projects from "./Projects";
import Skills from "./Skills";
import Exp from "./Experience";
import Interest from "./Interest";
function App(){

return (
    <div>
<Header/>

<hr></hr>
<Contact/>
<hr></hr>
<Info/>
<hr></hr>
<Skills></Skills>
<hr></hr>
<Exp></Exp>
<hr></hr>
<Projects></Projects>
<hr></hr>
<Interest></Interest>
<hr></hr>
<Footer/>
</div>
)

}
export default App;