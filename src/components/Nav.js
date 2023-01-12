import React, { useEffect } from "react";
import './css/Main.css'

function Nav(props) {
  const { currentTab, handleTabChange } = props;

  class Nav extends Component {
    render() {
      return (
        <nav className="navbar">
          <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
          <a href="#container-about"><i className="fa fa-fw fa-user"></i>About</a>
          <a href="#skillheader"><i className="fa fa-fw fa-laptop"></i>Skills</a>
          <a id="portfolio-link" href="#Portfolio"><i className="fa fa-fw fa-github"></i>Projects</a>
          <a href="#contactnav"><i className=""></i></a>
        </nav>
        );
    }
  }

}
export default Nav;