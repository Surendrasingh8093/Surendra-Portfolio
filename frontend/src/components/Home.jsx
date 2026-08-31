 import profile from "../assets/profile.png"; // Add your profile image


function Home() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm</h1>

         <h1 className="name">
          Surendra Singh
         </h1>

         <h2>Full Stack Developer</h2>

         <p>
          I build responsive and scalable MERN Stack applications.
         </p>

        </div>

        <div className="hero-image">
          <img src={profile} alt="Surendra Singh" />
      
        </div>

      
        <div className="buttons">
          <a href="/projects">
            <button>View Projects</button>
          </a>

          <a href="/resume.pdf" download>
          <button>
              Download Resume
            </button>
          </a>
        </div>

        <div className="social-links">
            <div>
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
               
                 <a
                 href="mailto:sjugendra096@gmail.com"
                 >
                 Email
                </a>
            </div>
        </div>


      </div>

    </section>
  );
}

export default Home;


