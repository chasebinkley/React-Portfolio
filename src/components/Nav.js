import React from "react";

function Nav(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <section className="navb">
      <ul className="navb">
        <li className="navList">
          <a
            href="#about" 
            onClick={() => handleTabChange("About")}
            className={currentTab === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="navList">
          <a
            href="#portfolio"
            onClick={() => handleTabChange("Portfolio")}
            className={
              currentTab === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="navList">
          <a
            href="#contact"
            onClick={() => handleTabChange("Contact")}
            className={
              currentTab === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="navList">
          <a
            href="#resume"
            onClick={() => handleTabChange("Resume")}
            className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
}


export default Nav;