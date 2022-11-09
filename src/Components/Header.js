import React from "react";
import emirhan from "../images/emirhan.png";
function Header() {
return(
<header>
<div className="top"><img className="circle-img" src={emirhan} style={{width:200, height:200} }></img>
<div className="name">
<h1>Emirhan Kaya 
<p  className="inf" >Computer Science Major & Business Analytics Minor Student <br></br> Sabanci University</p>
</h1>


</div>
</div>
</header>
)

}
export default Header;