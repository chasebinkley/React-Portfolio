import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div class="homeScreen">
      <section>
        <div>
          <Nav currentTab={currentTab} handleTabChange={handleTabChange}></Nav>
          <div>
            <h1 id="welcome">Welcome to my profile!</h1>
            <h1 id="introduction">I'm Chase Binkley</h1>
            <p id="softDev">
              <span class="highlight">
                &nbsp;"Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live" - John Woods&nbsp;
              </span>
            </p>
          </div>
        </div>
      </section>
      <div class="diagonal"></div>
    </div>
  );
}

export default Header;