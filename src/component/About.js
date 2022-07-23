import React from 'react';

const About = () => {

  return (
    <div className='my-3'>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <strong>Ditch a clunky handwritten notes</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
            <strong>Each time a student create a new document, their notes gets preserved to the safe place. The idea of creative side versus objective side is preserved even if the actual assignments are not in those physical positions.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <strong>Check work frequently, and encourage collaboration.</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
            <strong>Even more so, the digital format lends itself to peer evaluation and collaborative study. Students studying together is a much-needed practice during the pandemic, when students long to connect. The digital, interactive notebook provides the structure that students need.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              <strong> Keep track of your Activities.</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <strong>Nowadays, it is very difficult to keep track of your work or to measure the progress and being able to identify the where you left behind. So, here is you solution to keep yourself on schedule by making notes of TO-DO work!</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
