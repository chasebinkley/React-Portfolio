import React from "react";
import Nav from "./Nav"
import './css/Main.css'

function Header(props) {
    const { currentTab, handleTabChange } = props;
    return(
        <section id="Header">
            <div>
                <Nav currentTab = {currentTab} handleTabChange={handleTabChange}></Nav>
            </div>
            <div>

            </div>
            <h1 className="header-h1">Header</h1>
            <div>
              
            </div>
            <div>

            </div>
        </section>
    )
}

export default Header;