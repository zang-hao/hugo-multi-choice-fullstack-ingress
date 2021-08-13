import React from "react"

const Expeirence = ({ data }) => {
  if (data) {
    var job = data.job;
    var job_list = data.job_list;
    var year = data.year;
    var project = data.project;
    var project_list = data.project_list;
    var coding = data.coding;
    var pack = data.pack;
  }
  return (
    <>
      <section id="expeirence">
        <div className="row">
          <div className="col-sm-3 year">
            <h1><span>{year}</span></h1>
          </div>
          <div className="col-sm-9 info">
            <h2>{job}</h2>
            <ul>
              {job_list && job_list.map((x, index) => {
                return <li key={index}>{x}</li>
              })}
            </ul>
            <br />
            <h3>Project</h3>
            <h4>{project}</h4>
            <ul>
              {project_list && project_list.map((x, index) => {
                return <li key={index}>{x}</li>
              })}
            </ul>
            <p><strong>Coding language: </strong>{coding} </p>
            <p><strong>Skills: </strong>{pack} </p>





          </div>
        </div>
      </section>
    </>
  )

}

export default Expeirence