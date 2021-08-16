import React from "react";

const Work=()=>{
  return(
    <>
      <div id="work">
        <div className="card work">
          <div className="row no-gutters">
            <div className="col-md-4">
              <a href="http://zangjames.tw/makeQuiz">
                <img className="card-img" src='images/MakeQuiz-shot.png'/>
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Multi-choice maker</h5>
                <p className="card-text">
                  Make a Muti-choice sheet, dockerized fullstack development and deploy kubernetes on GCP with gitlab-ci.
                </p>
                <ul>
                  <li><strong>Frontend: </strong>React</li>
                  <li><strong>Backend: </strong>Express, MongoDB</li>
                  <li><strong>Container: </strong>kubernetes, Docker</li>
                  <li><strong>CI/CD: </strong>Gitlab-CI</li>
                  <li><strong>Cloud: </strong>GCP, GKE</li>
                  <li><strong>Iac: </strong>Terraform</li>
                </ul>
                <a href="https://github.com/zang-hao/hugo-multi-choice-fullstack-ingress" type="button" className="btn btn-dark"><i class="bi bi-github me-1"></i>GitHub</a>

                
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