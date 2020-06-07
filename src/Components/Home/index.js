import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
function Home() {
  return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" id="pictureone">
       
            <img
              src={require("../../Images/career1.gif")}
              alt=""
            />
       
      
      </div>

      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7" id="info about me">
        <h5 id="header">Me how I work</h5>
        <p>
          I'm a creative individual with an ample capacity at developing
          ambitious projects. It all starts with thoughts and the proper search
          for optimal resorces to expand these thoughts, into a transformable
          idea, which well put together starts giving meaning and worth to the
          concept, an angle, a point, a shape; which all really, will amount to
          the begining of positive change forward, towards growth in
          development. This first wave of change, we harvest into collaborative
          efforts, and expand onward to produce a finilazed goal, prototype,
          projection, model and/or systematic platform, that operates
          efficiently and maximizes peak results.
        </p>
      </div>
      </div>
    
  );
}
export default Home;
