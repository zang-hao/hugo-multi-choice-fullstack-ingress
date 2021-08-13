import React from "react"

const About = ({ data }) => {
  if (data) {
    var aboutme = data.aboutme
    var birth = data.details.birth
    var mail = data.details.mail
    var phone = data.details.phone
    var address=data.details.address
    var education=data.education
  }

  return (
    <>


      <section id="about">

        <div className="row about">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-8 intro">
            <h1>About Me</h1>
            <p>{aboutme}</p>
            <h1>Details</h1>
            <p>
              <span>{birth}</span><br />
              <span>{mail}</span><br />
              <span>{phone}</span><br />
              <span>{address}</span>
            </p>
            <h1>Education</h1>
            <p>{education}</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default About