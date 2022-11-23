import React from "react";

function Nav(props){
    return <nav>
        <ul>
           { props.links.map(link => {
                return <li>{link}</li>
            })}
        </ul>
    </nav>
}

export default Nav;