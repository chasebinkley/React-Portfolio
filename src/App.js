import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from"./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Nav />
      <br />
      <Banner />
      <br />
      <About />
      <br />
      <hr />
      <h1 id="contactnav" className="contact">Contact Information</h1>
      <hr />
      <Contact />

    </div>
  )
}

// function App() {
//   const [currentTab, handleTabChange] = useState("about");

//   const renderTab = () => {
//     if (currentTab === "About") {
//       return <About />;
//     }
//     if (currentTab === "Contact") {
//       return <Contact />;
//     }
//     if (currentTab === "Portfolio") {
//       return <Portfolio />;
//     }
//     if (currentTab === "Resume") {
//       return <Resume />;
//     }
//     return <About />;
//   };
//   return (
//     <>

//       <Header
//         currentTab={currentTab}
//         handleTabChange={handleTabChange}
//       ></Header>
//       <main>{renderTab()}</main>
//       <Footer></Footer>
//     </>
//   );
// }
export default App;
