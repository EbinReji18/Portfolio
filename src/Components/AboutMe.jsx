import React from 'react';

function AboutMe() {
  return (
    <>
      <div className='container bg-dark mt-4 p-5'>
        <h2 className='font-weight-bold text-center py-4'>Education</h2>

        <div className='row justify-content-center mb-4'>
          <div className='col-12 col-md-8 '>
            <h5>Bachelor Of Computer Application</h5>
            <p style={{ color: "white", marginBottom: "0" }}>
              Kannur University <br />
              CGPA: 6.3
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <p style={{ textAlign: "center", color: "white", marginBottom: 0 }}>2021 – 2024</p>
          </div>
        </div>

        <div className='row justify-content-center mb-4'>
          <div className='col-12 col-md-8'>
            <h5>Higher Secondary</h5>
            <p style={{ color: "white", marginBottom: "0" }}>
              Computer Science <br />
              CGPA: 7.0
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <p style={{ textAlign: "center", color: "white", marginBottom: 0 }}>2018 – 2020</p>
          </div>
        </div>
      </div>



      <div className='container bg-dark mt-4 p-5 text-white'>
        <h2 className='font-weight-bold text-center py-4'>PROFESSIONAL EXPERIENCE</h2>
        <div className='experience-section p-4 mb-4' style={{
          border: '2px solid #4CAF50',
          borderRadius: '10px',
          backgroundColor: '#343a40'
        }}>
          <h4 className='text-uppercase font-weight-bold text-success'>Intern, Luminar Technolab</h4>
          <h5 style={{ fontStyle: "italic" }}>ME(A)RN Stack Developer</h5>
          <p className='text-muted'>
            <strong>05/2024 – Present</strong> <br />
            Calicut
          </p>

          <ul className='list-unstyled mt-3'>
            <li className='mb-2'>
              <strong>React:</strong> Proficient in building user interfaces, managing state with hooks, and component-based architecture.
            </li>
            <li className='mb-2'>
              <strong>Node.js:</strong> Basic understanding of server-side development and JavaScript runtime.
            </li>
            <li className='mb-2'>
              <strong>JavaScript:</strong> Strong grasp of asynchronous programming, and DOM manipulation.
            </li>
            <li className='mb-2'>
              <strong>RESTful APIs:</strong> Knowledge of building and consuming APIs in a MEARN stack environment.
            </li>
            <li className='mb-2'>
              <strong>Version Control:</strong> Experience with Git and GitHub for version control and collaboration.
            </li>
          </ul>
        </div>
      </div>



      <div className='container bg-dark mt-4 p-5 text-white'>
      <h2 className='font-weight-bold text-center py-4'>TECHNICAL SKILLS</h2>

      <div className='skills-section p-4' style={{
        border: '2px solid #007bff',
        borderRadius: '10px',
        backgroundColor: '#343a40'
      }}>
        <div className='row text-center'>
          <div className='col-6 col-md-4 mb-4'>
            <i className="fab fa-html5 fa-3x" style={{ color: "#E34F26" }}></i>
            <p className='mt-2'>HTML</p>
          </div>
          <div className='col-6 col-md-4 mb-4'>
            <i className="fab fa-bootstrap fa-3x" style={{ color: "#563d7c" }}></i>
            <p className='mt-2'>Bootstrap</p>
          </div>
          <div className='col-6 col-md-4 mb-4'>
            <i className="fab fa-js fa-3x" style={{ color: "#F7DF1E" }}></i>
            <p className='mt-2'>JavaScript</p>
          </div>
          <div className='col-6 col-md-4 mb-4'>
            <i className="fab fa-css3-alt fa-3x" style={{ color: "#1572B6" }}></i>
            <p className='mt-2'>CSS</p>
          </div>
          <div className='col-6 col-md-4 mb-4'>
            <i className="fab fa-css3 fa-3x" style={{ color: "#06B6D4" }}></i>
            <p className='mt-2'>Tailwind CSS</p>
          </div>
          <div className='col-6 col-md-4 mb-4'>
            <i className="fab fa-react fa-3x" style={{ color: "#61DBFB" }}></i>
            <p className='mt-2'>React</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutMe;