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

// export default Nav;
// import React, { Component } from "react";

// class Nav extends Component {
//   render() {
//     return (
//       <nav className="navbar">          <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
//           <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
//           <a href="#skillheader"><i className="fa fa-fw fa-laptop"></i>Skills</a>
//           <a id="portfolio-link" href="#Portfolio"><i className="fa fa-fw fa-github"></i>Projects</a>
//           <a href="#contactnav"><i className=""></i></a>
//         </nav>
//       );
//     };
//   };


export default Nav;