import React from "react";
import Nav from "./Nav";

function Header(props){
    return <header>
        <h1>Company Name</h1>
        <Nav links={["Product", "Services", "Customers", "Resources", "Events", "About"]} />
        <input type="text" name="search" value=""></input>
        <button>search</button>
    </header>
}

export default Header;