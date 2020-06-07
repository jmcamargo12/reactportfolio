import React from "react";
import "./styles.css";
function Projects() {
  return (
    <div>
      <h1 className="titlePage">Portfolio</h1>
      <section>
        <div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Swap Aid</h2>
              <a href="https://shrouded-shelf-73008.herokuapp.com/">
                <img
                  src={require("../../Images/Swapaid.PNG")}
                  height="300px"
                  width="300px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Healthy Bites</h2>
              <a href="https://healthy-bites.herokuapp.com/index.html">
                <img
                  src={require("../../Images/healthybites.PNG")}
                  height="300px"
                  width="300px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Fitnasss WorkOut Tracker</h2>
              <a href="https://thawing-sea-72096.herokuapp.com/?id=5eda7666f073e0001744a867">
                <img
                  src={require("../../Images/fitness.PNG")}
                  height="300px"
                  width="300px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Weather App</h2>
              <a href="https://jmcamargo12.github.io/weatherApp/">
                <img
                  src={require("../../Images/weatherapp.PNG")}
                  height="300px"
                  width="300px"
                  alt=""
                />
              </a>
            </div>

            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Schedule Planner</h2>
              <a href="https://jmcamargo12.github.io/SchedulePlanner/">
                <img
                  src={require("../../Images/WorkSchedule.PNG")}
                  height="300px"
                  width="300px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Password Generator</h2>
              <a href="https://jmcamargo12.github.io/Whatever/">
                <img
                  src={require("../../Images/passwordg.PNG")}
                  height="300px"
                  width="300px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}
export default Projects;
