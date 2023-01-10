import React from "react";
import Nav from "./Nav"

function Header(props) {
    const { currentTab, handleTabChange } = props;
    return(
        <section id="Header">
            <div>
                <Nav currentTab = {currentTab} handleTabChange={handleTabChange}></Nav>
            </div>
            <div>

            </div>
            <h1>Header</h1>
            <div>
                
            </div>
        </section>
    )
}

export default Header;