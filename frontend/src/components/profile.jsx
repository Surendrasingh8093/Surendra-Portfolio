import profile from "../assets/profile.png";

function Profile() {
  return (
    <section className="profile">

      <div className="profile-container">

        <div className="profile-left">

          <img
            src={profile}
            alt="Surendra Singh"
            className="profile-image"
          />

          <h2>Surendra Singh</h2>

          <h4>Full Stack MERN Developer</h4>

          <div className="social-icons">

            <a
              href="https://github.com/Surendrasingh8093"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/surendra-singh-75b38630b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:your-email@gmail.com">
              Email
            </a>

          </div>

          <a href="/resume.pdf" download>
            <button className="resume-btn">
              Download Resume
            </button>
          </a>

        </div>

        <div className="profile-right">

          <h1>About Me</h1>

          <p>
            Hello! I'm <strong>Surendra Singh</strong>, a passionate Full Stack
            MERN Developer with experience in building responsive, scalable,
            and user-friendly web applications using React.js, Node.js,
            Express.js, and MongoDB.
          </p>

          <div className="profile-info">

            <div className="info-card">
              <h3>Name</h3>
              <p>Surendra Singh</p>
            </div>

            <div className="info-card">
              <h3>Education</h3>
              <p>B.Tech CSE (AI & ML)</p>
            </div>

            <div className="info-card">
              <h3>Experience</h3>
              <p>Fresher</p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>India</p>
            </div>

            <div className="info-card">
              <h3>Email</h3>
              <p>surendra11884@gmail.com</p>
            </div>

            <div className="info-card">
              <h3>Status</h3>
              <p>Open to Work</p>
            </div>

          </div>

          <h2>Technical Skills</h2>

          <div className="skills">

            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Bootstrap</span>
            <span>Git</span>
            <span>GitHub</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;