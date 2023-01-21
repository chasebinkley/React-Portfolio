import React from "react";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (
    <Container fluid>
      <div>
        <section id="portfolio" className="jobs">
          <p className="projects">-My Projects-</p>
          <div className="container-fluid">
            <div className="row row-1">
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/Tap-Into_Source.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">
                      <mark>Tap Into Source</mark>
                    </h3>
                    <p>
                      <mark>
                        Node.js, Handlebars, Express, Sequelize, Bootstrap,
                        Jquery
                      </mark>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/doges-n-dad-jokes.jpeg)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">
                      <mark>Doges & Dad Jokes</mark>
                    </h3>
                    <p>
                      <mark>HTML, JavaScript, CSS, Bulma, 2 public API's</mark>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/scheduler.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">
                      <mark>Work Day Scheduler</mark>
                    </h3>
                    <p>
                      <mark>HTML, CSS, Jquery, Moment</mark>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/weather-dashboard.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">
                      <mark>Weather Dashboard</mark>
                    </h3>
                    <p>
                      <mark>HTML, CSS, Bootstrap, Jquery, Openweather API</mark>
                    </p>
                  </div>
                </div>
                ;{" "}
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/password.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">
                      <mark>Password Generator</mark>
                    </h3>
                    <p>
                      <mark>HTML, CSS, JavaScript</mark>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/readme-logo.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">
                      <mark>README Generator</mark>
                    </h3>
                    <p>
                      <mark>Node.js</mark>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/coding-pic.jpeg)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">
                      <mark>Coding Quiz</mark>
                    </h3>
                    <p>
                      <mark>HTML, CSS, JavaScript</mark>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default Portfolio;
