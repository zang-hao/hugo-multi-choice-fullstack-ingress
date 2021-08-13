import React from "react";

const Work=()=>{
  return(
    <>
      <div id="work">
        <div className="card work">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img" src='images/MakeQuiz-shot.png'/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Multi-choice maker</h5>
                <p className="card-text">
                  Make a Muti-choice sheet.
                </p>
                <ul>
                  <li><strong>Frontend: </strong>React</li>
                  <li><strong>Backend: </strong>Express, MongoDB</li>
                  <li><strong>Container: </strong>kubernetes, Docker</li>
                  <li><strong>CI/CD: </strong>Gitlab-CI</li>
                  <li><strong>Cloud: </strong>GCP, GKE</li>
                </ul>
                <a href="http://zangjames.tw/makeQuiz" className="stretched-link">Here</a>
              </div>
            </div>
          </div>
        </div>

        <div className="card work">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img" src='images/Resume-shot.png'/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Resume</h5>
                <p className="card-text">
                  Learning html and css, introduce myself, welcome.
                </p>
                <a href="#" className="stretched-link">Here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work